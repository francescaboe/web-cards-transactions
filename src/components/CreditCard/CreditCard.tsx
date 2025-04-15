import * as React from 'react'

interface CreditCardProps {
  id: string
  description: string
  isLoading?: boolean
  isError?: boolean
}
const CreditCard: React.FC<CreditCardProps> = ({
  id = 'fake id',
  description = 'fake description',
}) => {
  return (
    <div>
      <span>{id}</span>
      <span>{description}</span>
    </div>
  )
}

export default CreditCard
