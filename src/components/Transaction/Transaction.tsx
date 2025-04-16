import React from 'react'
import { TransactionItem, TransactionDetail, Skeleton } from './Transaction.styles'

interface TransactionProp {
  id: string
  description: string
  amount: number
  isLoading?: boolean
}

const Transaction: React.FC<TransactionProp> = ({ id, description, amount, isLoading }) => {
  if (isLoading) {
    return <Skeleton aria-busy="true" aria-label="Loading transaction" key={id} />
  }

  return (
    <TransactionItem role="listitem" key={id}>
      <TransactionDetail aria-label="Description">{description}</TransactionDetail>
      <TransactionDetail aria-label="Amount">{amount}€</TransactionDetail>
    </TransactionItem>
  )
}

export default Transaction
