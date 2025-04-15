import React from 'react'

interface TransactionProp {
  id: string
  description: string
  amount: number
  isLoading?: boolean
}

const Transaction: React.FC<TransactionProp> = ({ id, description, amount, isLoading }) => {
  if (isLoading)
    return (
      <div>
        <span>loading</span>
        <span>loading </span>
        <span>loading</span>
      </div>
    )
  return (
    <div>
      <span>{id}</span>
      <span>{description}</span>
      <span>{amount}</span>
    </div>
  )
}

export default Transaction
