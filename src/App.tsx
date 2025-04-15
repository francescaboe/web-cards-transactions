import CreditCard from 'components/CreditCard/CreditCard.tsx'
import { Card, getCards } from 'ApiClient'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  font-size: ${(props) => props.theme.typography.fontSize.body};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

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
      <Button>Hello</Button>
      {cards.length > 0 &&
        cards.map(({ id, description }) => (
          <CreditCard description={description} id={id} key={id} />
        ))}
    </div>
  )
}

export default App
