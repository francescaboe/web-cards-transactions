import React from 'react'
import CreditCard from 'components/CreditCard'
import EmptyState from 'components/EmptyState'
import {
  CardsSectionContainer,
  AllCardsContainer,
  ScrollButton,
  ScrollWrapper,
} from './CardsSection.styles.ts'
import { useHorizontalScrollControls } from 'hooks/useHorizontalScrollControls'
import { Card as CardData } from 'ApiClient'

interface CardsSectionProps {
  isCardsLoading: boolean
  selectedCardData?: CardData
  cards: CardData[]
  selectedCardId: string
  onCardSelect: (id: string) => void
}

const CardsSection: React.FC<CardsSectionProps> = ({
  isCardsLoading,
  selectedCardData,
  cards,
  selectedCardId,
  onCardSelect,
}) => {
  const { containerRef, scroll } = useHorizontalScrollControls()

  const handleCardSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCardSelect(e.currentTarget.id)
  }

  const isLoading = isCardsLoading
  const hasCards = cards.length > 0
  const isEmpty = !isLoading && !hasCards

  return (
    <CardsSectionContainer>
      {isLoading && (
        <AllCardsContainer>
          {[1, 2, 3].map((val) => (
            <CreditCard description="loading" id={`ghost-${val}`} isLoading key={val} />
          ))}
        </AllCardsContainer>
      )}

      {hasCards && (
        <ScrollWrapper>
          <ScrollButton $side="left" onClick={() => scroll('left')}>
            {`<`}
          </ScrollButton>

          <AllCardsContainer ref={containerRef}>
            {cards.map(({ id, description }) =>
              id === selectedCardId && selectedCardData ? (
                <CreditCard
                  id={selectedCardData.id}
                  key={id}
                  description={selectedCardData.description}
                  isSelected
                />
              ) : (
                <CreditCard description={description} id={id} key={id} onClick={handleCardSelect} />
              ),
            )}
          </AllCardsContainer>

          <ScrollButton $side="right" onClick={() => scroll('right')}>
            {`>`}
          </ScrollButton>
        </ScrollWrapper>
      )}

      {isEmpty && <EmptyState message="No Cards available" />}
    </CardsSectionContainer>
  )
}

export default CardsSection
