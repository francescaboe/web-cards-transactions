import { useEffect, useState } from 'react'
import { Card, getCards } from 'ApiClient'

export interface UseCardsResultType {
  cards: Card[]
  isCardsLoading: boolean
  cardsError: string | null
  selectedCardId: string
  onCardSelect: (id: string) => void
  selectedCardData?: Card
}

export function useCards(): UseCardsResultType {
  const [cards, setCards] = useState<Card[]>([])
  const [isCardsLoading, setIsCardsLoading] = useState<boolean>(false)
  const [cardsError, setCardsError] = useState<string | null>(null)
  const [selectedCardId, setSelectedCardId] = useState<string>('')

  useEffect(() => {
    setCardsError(null)
    setIsCardsLoading(true)
    getCards()
      .then((data) => {
        setCards(data)
        if (data.length > 0) setSelectedCardId(data[0].id)
      })
      .catch((err) => setCardsError(err.message))
      .finally(() => setIsCardsLoading(false))
  }, [])

  const onCardSelect = (cardId: string) => {
    if (cardId === selectedCardId) return
    setSelectedCardId(cardId)
  }

  return {
    cards,
    isCardsLoading,
    cardsError,
    selectedCardId,
    onCardSelect,
    selectedCardData: cards.find((card) => card.id === selectedCardId),
  }
}
