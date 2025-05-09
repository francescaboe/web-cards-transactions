import React from 'react'
import CreditCard from 'components/CreditCard'
import {
  AllCardsContainer,
  CardWrapper,
  OtherCardsListContainer,
  SelectedCardContainer,
} from './CardsSection.styles.ts'
import { CenteredContent } from 'styles/components/generic.ts'
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
  //handle on select new card
  const handleCardSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCardSelect(e.currentTarget.id)
  }
  return (
    <AllCardsContainer>
      {isCardsLoading ? (
        <>
          {/* cards loading */}
          {/*selected card*/}
          <SelectedCardContainer>
            <CreditCard description="loading" id="loading-main" isLoading isSelected />
          </SelectedCardContainer>
          {/*other cards*/}
          <OtherCardsListContainer>
            {[1, 2, 3].map((val) => (
              <CardWrapper key={`ghost-${val}`}>
                <CreditCard
                  key={`ghost-${val}`}
                  description="loading"
                  id={`ghost-${val}`}
                  isLoading
                />
              </CardWrapper>
            ))}
          </OtherCardsListContainer>
        </>
      ) : (
        <>
          {/*cards success*/}
          {/*selected card*/}
          <SelectedCardContainer>
            {selectedCardData && (
              <CreditCard
                id={selectedCardData.id}
                description={selectedCardData.description}
                isSelected
              />
            )}
          </SelectedCardContainer>
          {/*other cards*/}
          <OtherCardsListContainer>
            {cards.length > 0 &&
              cards.map(
                ({ id, description }) =>
                  id !== selectedCardId && (
                    <CardWrapper key={id}>
                      <CreditCard
                        description={description}
                        id={id}
                        key={id}
                        onClick={handleCardSelect}
                      />
                    </CardWrapper>
                  ),
              )}
          </OtherCardsListContainer>
        </>
      )}
      {/*cards empty*/}
      {!isCardsLoading && cards.length === 0 && (
        <CenteredContent>No cards available</CenteredContent>
      )}
    </AllCardsContainer>
  )
}

export default CardsSection
