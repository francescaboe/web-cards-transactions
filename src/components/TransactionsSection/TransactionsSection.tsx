import React from 'react'
import Transaction from 'components/Transaction'
import ErrorState from 'components/ErrorState'
import EmptyState from 'components/EmptyState'
import TransactionsLoadingState from 'components/TransactionsSection/subcomponents/TransactionsLoadingState'
import { TransactionListContainer } from './TransactionsSection.styles.ts'
import { useTransactionsContext } from 'contex/TransactionsContext.tsx'
import { useCardsContext } from 'contex/CardsContext.tsx'

const TransactionsSection: React.FC = () => {
  const { amountFilter, isTransactionsLoading, transactionsError, displayedTransactions } =
    useTransactionsContext()
  const { isCardsLoading } = useCardsContext()

  const isLoading = isTransactionsLoading
  const hasError = !!transactionsError
  const hasTransactions = displayedTransactions.length > 0
  const isEmpty = !isCardsLoading && !isLoading && !hasError && !hasTransactions

  return (
    <TransactionListContainer>
      {isLoading && <TransactionsLoadingState />}

      {hasError && <ErrorState error={transactionsError} />}

      {hasTransactions &&
        displayedTransactions.map(({ id, description, amount }) => (
          <Transaction description={description} id={id} key={id} amount={amount} />
        ))}

      {isEmpty && (
        <EmptyState
          message={
            amountFilter !== ''
              ? `No transactions above ${amountFilter}€`
              : 'No transactions for this card'
          }
        />
      )}
    </TransactionListContainer>
  )
}

export default TransactionsSection
