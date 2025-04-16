import React from 'react'
import {
  TransactionItem,
  TransactionDetail,
  LoadingOverlay,
  AmountDetail,
  TransactionContent,
} from './Transaction.styles'

interface TransactionProp {
  id: string
  description: string
  amount: number
  isLoading?: boolean
}

const Transaction: React.FC<TransactionProp> = ({ id, description, amount, isLoading }) => {
  return (
    <TransactionItem role="listitem" key={id} $isLoading={isLoading} aria-busy={isLoading}>
      <LoadingOverlay $isLoading={isLoading} aria-hidden="true" />
      <TransactionContent>
        <TransactionDetail aria-label="Description" $isLoading={isLoading}>
          {isLoading ? 'Loading...' : description}
        </TransactionDetail>
        <AmountDetail aria-label="Amount" $isLoading={isLoading}>
          {isLoading ? '--' : `${amount}€`}
        </AmountDetail>
      </TransactionContent>
    </TransactionItem>
  )
}

export default Transaction
