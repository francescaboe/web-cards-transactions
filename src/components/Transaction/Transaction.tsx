import React from 'react'

interface TransactionProp {
  id: string
  description: string
  amount: number
}

const Transaction: React.FC<TransactionProp> = ({ id, description, amount }) => {
  return (
    <div>
      <span>{id}</span>
      <span>{description}</span>
      <span>{amount}</span>
    </div>
  )
}

export default Transaction
