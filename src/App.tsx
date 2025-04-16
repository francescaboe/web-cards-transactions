import React from 'react'
// components
import CreditCard from 'components/CreditCard'
import Transaction from 'components/Transaction'
import Layout from 'components/Layout'
// styled components
import { CenteredContent, ErrorMessage } from 'styles/components/generic.ts'
import {
  CardListContainer,
  CardsContainer,
  FilterContainer,
  FilterLabel,
  TransactionListContainer,
} from './App.styles.ts'
import { Input } from 'styles/components/input.ts'
// hooks
import useCardsAndTransactions from 'hooks/useCardsAndTransactions.ts'

/**
 * As this is a small component I have decided to manage everything directly inside App.tsx
 * In a bigger project this would probably sit in its own page/tab
 **/

const arrayOfGhosts = [0, 1, 2]

function App() {
  const {
    // card stuff
    cards,
    isCardsLoading,
    cardsError,
    selectedCardId,
    selectedCardData,
    onCardSelect,
    // transaction stuff
    filteredTransactions,
    isTransactionsLoading,
    transactionsError,
    // form stuff
    amountFrom,
    onFilterValueChange,
  } = useCardsAndTransactions()

  //handle on select new card
  const handleCardSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCardSelect(e.currentTarget.id)
  }

  // handle filter amount change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValueChange(e.target.value)
  }

  if (cardsError)
    return (
      <CenteredContent>
        <ErrorMessage role="alert" aria-live="assertive">
          Error: fake error {cardsError}
        </ErrorMessage>
      </CenteredContent>
    )

  return (
    <Layout>
      {/*selected card plus all other available cards */}
      <CardsContainer>
        {/* display skeleton when cards is fetching */}
        {isCardsLoading ? (
          <>
            <CreditCard description="loading" id="loading-main" isLoading isSelected />
            <CardListContainer>
              {arrayOfGhosts.map((val) => (
                <CreditCard
                  key={`ghost-${val}`}
                  description="loading"
                  id={`ghost-${val}`}
                  isLoading
                />
              ))}
            </CardListContainer>
          </>
        ) : (
          <>
            {/*display selected card data*/}
            {selectedCardData && (
              <CreditCard
                id={selectedCardData.id}
                description={selectedCardData.description}
                isSelected
              />
            )}
            {/*other available cards*/}
            <CardListContainer>
              {cards.length > 0 &&
                cards.map(
                  ({ id, description }) =>
                    id !== selectedCardId && (
                      <CreditCard
                        description={description}
                        id={id}
                        key={id}
                        onClick={handleCardSelect}
                      />
                    ),
                )}
            </CardListContainer>
          </>
        )}
        {/*edge case where the cards array is empty*/}
        {!isCardsLoading && cards.length === 0 && (
          <CenteredContent>No cards available</CenteredContent>
        )}
      </CardsContainer>

      {/*input filter by amount, filter on value change*/}
      <FilterContainer>
        <FilterLabel htmlFor="filter-amount">Minimum Amount Filter</FilterLabel>
        <Input
          id="filter-amount"
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="Amount"
          value={amountFrom}
          onChange={handleFilterChange}
          disabled={isCardsLoading || isTransactionsLoading || !!transactionsError}
        />
      </FilterContainer>
      {/*vertical list of transactions*/}
      <TransactionListContainer>
        {/*loading state*/}
        {isTransactionsLoading &&
          arrayOfGhosts.map((value) => (
            <Transaction id="loading" description="loading" amount={0} isLoading key={value} />
          ))}
        {/*error state*/}
        {transactionsError && (
          <CenteredContent>
            <ErrorMessage>Error: {transactionsError}</ErrorMessage>
          </CenteredContent>
        )}
        {/*all good state*/}
        {filteredTransactions.length > 0
          ? filteredTransactions.map(({ id, description, amount }) => (
              <Transaction description={description} id={id} key={id} amount={amount} />
            ))
          : !isTransactionsLoading &&
            !transactionsError && (
              <CenteredContent>
                {amountFrom !== ''
                  ? `No transactions above ${amountFrom}`
                  : 'No transactions for this card'}
              </CenteredContent>
            )}
      </TransactionListContainer>
    </Layout>
  )
}

export default App
