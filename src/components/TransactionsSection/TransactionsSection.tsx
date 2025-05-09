import React from 'react'
import Transaction from 'components/Transaction'
import ErrorState from 'components/ErrorState'
import EmptyState from 'components/EmptyState'
import TransactionsLoadingState from 'components/TransactionsSection/subcomponents/TransactionsLoadingState'
import { TransactionListContainer } from './TransactionsSection.styles.ts'
import { Transaction as TransactionData } from 'ApiClient'

interface TransactionsSectionProps {
  filteredTransactions: TransactionData[]
  isCardsLoading: boolean
  isTransactionsLoading: boolean
  transactionsError: string | null
  amountFrom: string
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  amountFrom,
  isTransactionsLoading,
  transactionsError,
  filteredTransactions,
  isCardsLoading,
}) => {
  const isLoading = isTransactionsLoading
  const hasError = !!transactionsError
  const hasTransactions = filteredTransactions.length > 0
  const isEmpty = !isCardsLoading && !isLoading && !hasError && !hasTransactions

  return (
    <TransactionListContainer>
      {isLoading && <TransactionsLoadingState />}

      {hasError && <ErrorState error={transactionsError} />}

      {hasTransactions &&
        filteredTransactions.map(({ id, description, amount }) => (
          <Transaction description={description} id={id} key={id} amount={amount} />
        ))}

      {isEmpty && (
        <EmptyState
          message={
            amountFrom !== ''
              ? `No transactions above ${amountFrom}€`
              : 'No transactions for this card'
          }
        />
      )}
    </TransactionListContainer>
  )
}

export default TransactionsSection
