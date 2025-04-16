import React from 'react'
import { CardContainer, LoadingOverlay, CardContent, CardTitle, CardId } from './CreditCard.styles'

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
        <CardId>
          ID: <span aria-label="balance amount">{id}</span>
        </CardId>
        {/* Other card content */}
      </CardContent>
    </CardContainer>
  )
}

export default CreditCard
