import React from 'react'
import { CardContainer, LoadingOverlay, CardTitle, CardId } from './CreditCard.styles'

/**
 * CreditCard component, displays a (selectable) card with description and ID
 * Handles loading states and selection styling
 */

interface CreditCardProps {
  id: string
  description: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isSelected?: boolean
  isLoading?: boolean
}

const CreditCard: React.FC<CreditCardProps> = ({
  id,
  description,
  isSelected,
  isLoading = false,
  onClick,
}) => {
  return (
    <CardContainer id={id} aria-busy={isLoading} $isSelected={isSelected} onClick={onClick}>
      <LoadingOverlay $isLoading={isLoading} aria-hidden="true" />
      <>
        <CardTitle>{description}</CardTitle>
        <CardId $isSelected={isSelected}>ID: {id}</CardId>
      </>
    </CardContainer>
  )
}

export default CreditCard
