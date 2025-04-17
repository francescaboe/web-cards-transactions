import React from 'react'
import { CardContainer, LoadingOverlay, CardContent, CardTitle, CardId } from './CreditCard.styles'

/**
 * CreditCard component, displays a (selectable) card with description and ID
 * Handles loading states and selection styling
 */

interface CreditCardProps {
  id: string
  description: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
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
      <CardContent $isLoading={isLoading}>
        <CardTitle>{description}</CardTitle>
        <CardId $isSelected={isSelected}>ID: {id}</CardId>
        {/* Other card content */}
      </CardContent>
    </CardContainer>
  )
}

export default CreditCard
