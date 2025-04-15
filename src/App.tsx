import { useEffect, useState } from 'react'
// components
import CreditCard from 'components/CreditCard'
import Transaction from 'components/Transaction'
import Layout from 'components/Layout'
// apis
import { Card, getCards, Transaction as TransactionProps, getTransactions } from 'ApiClient'
import {
  CardListContainer,
  FilterContainer,
  TransactionListContainer,
} from 'styles/components/generic.ts'

/**
 * As this is a small component I have decided to manage everything directly inside App.tsx
 * In a bigger project this would probably sit in its own page/tab
 **/

function App() {
  const [cards, setCards] = useState<Card[]>([])
  const [isCardsLoading, setIsCardsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // id of selected car
  const [selectedCard, setSelectedCard] = useState<string>('')
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    // on component mount fetch the cards
    setIsCardsLoading(true)
    getCards()
      .then((data) => {
        setCards(data)
        setSelectedCard(data[0].id)
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsCardsLoading(false))
  }, [])

  useEffect(() => {
    if (!selectedCard) return
    // add transactions loading
    // add reset filter on card change
    // fetch correct transactions ofr the selected card
    getTransactions(selectedCard).then((data) => setTransactions(data))
  }, [selectedCard])

  if (isCardsLoading) return <p>Loading cards...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <Layout>
      <span>SELECTED CARD: {selectedCard}</span>
      <CardListContainer>
        {cards.length > 0 &&
          cards.map(({ id, description }) => (
            <CreditCard description={description} id={id} key={id} />
          ))}
      </CardListContainer>
      <FilterContainer>
        <input type="number" />
      </FilterContainer>
      <TransactionListContainer>
        {transactions.length > 0 &&
          transactions.map(({ id, description, amount }) => (
            <Transaction description={description} id={id} key={id} amount={amount} />
          ))}
      </TransactionListContainer>
    </Layout>
  )
}

export default App
