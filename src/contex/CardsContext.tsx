import { createContext, use, ReactNode } from 'react'
import { useCards, UseCardsResultType } from 'hooks/useCards'

const CardsContext = createContext<UseCardsResultType | undefined>(undefined)

interface CardsProviderProps {
  children: ReactNode
}

export function CardsProvider({ children }: CardsProviderProps) {
  const cardsData = useCards()

  return <CardsContext value={cardsData}>{children}</CardsContext>
}

export function useCardsContext(): UseCardsResultType {
  const context = use(CardsContext)
  if (context === undefined) {
    throw new Error('useCardsContext must be used within a CardsProvider')
  }
  return context
}
