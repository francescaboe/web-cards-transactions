import React from 'react'
// components
import CreditCard from 'components/CreditCard'
import Transaction from 'components/Transaction'
import Layout from 'components/Layout'
import {
  CardListContainer,
  CardsContainer,
  FilterContainer,
  TransactionListContainer,
} from 'styles/components/generic.ts'
import { Input } from 'styles/components/input.ts'
import useCardsAndTransactions from 'hooks/useCardsAndTransactions.ts'

/**
 * As this is a small component I have decided to manage everything directly inside App.tsx
 * In a bigger project this would probably sit in its own page/tab
 **/

const arrayOfGhosts = Array.from(Array(10).keys())
export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)

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
  const handleCardSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    onCardSelect(e.currentTarget.id)
  }

  // handle filter amount change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValueChange(e.target.value)
  }

  if (isCardsLoading) return <CreditCard description="loading" id="loading" isLoading isSelected />
  if (cardsError) return <p style={{ color: 'red' }}>Error: {cardsError}</p>

  return (
    <Layout>
      {/*selected card plus all other available cards */}
      <CardsContainer>
        {selectedCardData && (
          <CreditCard
            id={selectedCardData.id}
            description={selectedCardData.description}
            isSelected
          />
        )}

        {/*a container of the rest of available cards */}
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
      </CardsContainer>
      {/*input filter by amount, filter on enter press*/}
      <FilterContainer>
        <label htmlFor="search">Filter amount from:</label>
        <Input
          id="search"
          type="number"
          step="0.01"
          min="0"
          value={amountFrom}
          onChange={handleFilterChange}
          disabled={isCardsLoading || isTransactionsLoading}
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
        {transactionsError && <p style={{ color: 'red' }}>Error: {transactionsError}</p>}
        {/*all good state*/}
        {filteredTransactions.length > 0
          ? filteredTransactions.map(({ id, description, amount }) => (
              <Transaction description={description} id={id} key={id} amount={amount} />
            ))
          : !isTransactionsLoading && (
              <span>
                {amountFrom !== ''
                  ? `No transactions above ${amountFrom}`
                  : 'No transactions for this card'}
              </span>
            )}
      </TransactionListContainer>
    </Layout>
  )
}

export default App
