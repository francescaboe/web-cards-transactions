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
import { useCardsContext } from 'contex/CardsContext.tsx'

const CardsSection: React.FC = () => {
  const { containerRef, scroll, scrollElementToCenter } = useHorizontalScrollControls()
  const { cards, isCardsLoading, selectedCardData, selectedCardId, onCardSelect } =
    useCardsContext()

  const handleCardSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cardId = e.currentTarget.id
    onCardSelect(cardId)
    // Center the selected card in the view
    scrollElementToCenter(cardId)
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
