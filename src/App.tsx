import CreditCard from 'components/CreditCard/CreditCard.tsx'
import { Card, getCards } from 'ApiClient'
import { useEffect, useState } from 'react'

function App() {
  const [cards, setCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getCards()
      .then((data) => setCards(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <p>Loading cards...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div>
      {cards.length > 0 &&
        cards.map(({ id, description }) => (
          <CreditCard description={description} id={id} key={id} />
        ))}
    </div>
  )
}

export default App
