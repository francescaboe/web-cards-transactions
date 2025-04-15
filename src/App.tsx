import React, { useEffect, useState } from 'react'
// components
import CreditCard from 'components/CreditCard'
import Transaction from 'components/Transaction'
import Layout from 'components/Layout'
// apis
import { Card, getCards, Transaction as TransactionProps, getTransactions } from 'ApiClient'
import {
  CardListContainer,
  CardsContainer,
  FilterContainer,
  TransactionListContainer,
} from 'styles/components/generic.ts'
import { Input } from 'styles/components/input.ts'

/**
 * As this is a small component I have decided to manage everything directly inside App.tsx
 * In a bigger project this would probably sit in its own page/tab
 **/

const arrayOfGhosts = Array.from(Array(10).keys())

function App() {
  const [cards, setCards] = useState<Card[]>([])
  const [isCardsLoading, setIsCardsLoading] = useState<boolean>(false)
  const [cardsError, setCardsError] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<string>('')
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [isTransactionsLoading, setIsTransactionsLoading] = useState<boolean>(false)
  const [transactionsError, setTransactionsError] = useState<string | null>(null)
  // support variable so to keep the original data (transactions) intact (useful for reset)
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionProps[]>([])
  const [amountFrom, setAmountFrom] = useState<string>('')

  // on component mount fetch the cards
  useEffect(() => {
    setIsCardsLoading(true)
    getCards()
      .then((data) => {
        setCards(data)
        setSelectedCard(data[0].id)
      })
      .catch((err) => setCardsError(err.message))
      .finally(() => setIsCardsLoading(false))
  }, [])

  // when first/new card is selected fetch the corresponding transactions
  useEffect(() => {
    if (!selectedCard || isTransactionsLoading) return
    setIsTransactionsLoading(true)
    // reset filter on card change
    setAmountFrom('')
    // fetch correct transactions ofr the selected card
    getTransactions(selectedCard)
      .then((data) => setTransactions(data))
      .catch((err) => setTransactionsError(err.message))
      .finally(() => setIsTransactionsLoading(false))
  }, [selectedCard])

  // whenever transactions changes, update filtered transactions
  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  //handle on select new card
  const handleCardSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const newId = e.currentTarget.id
    // avoids multiple fetch requests and resetting transactions (and filterTransactions)
    if (isTransactionsLoading || newId === selectedCard) return
    setTransactions([])
    if (newId) setSelectedCard(newId)
  }

  // handle submit filter
  // could also apply filter onChange instead, discuss
  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!amountFrom) setTransactions(transactions)
    // filter logic here
    setFilteredTransactions(() =>
      transactions.filter((transaction) => transaction.amount >= Number(amountFrom)),
    )
  }

  if (isCardsLoading) return <CreditCard description="loading" id="loading" isLoading isSelected />
  if (cardsError) return <p style={{ color: 'red' }}>Error: {cardsError}</p>

  const selectedCardData = cards.find((card) => card.id === selectedCard)

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
                id !== selectedCard && (
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
        <form onSubmit={handleFilterSubmit}>
          <label htmlFor="search">Filter amount from:</label>
          <Input
            id="search"
            type="number"
            value={amountFrom}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountFrom(e.target.value)}
            disabled={isCardsLoading || isTransactionsLoading}
          />
        </form>
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
