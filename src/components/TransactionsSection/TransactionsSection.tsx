import React from 'react'
import Transaction from 'components/Transaction'
import { CenteredContent, ErrorMessage } from 'styles/components/generic.ts'
import { TransactionListContainer } from './TransactionsSection.styles.ts'
import { Transaction as TransactionProps } from 'ApiClient'

interface TransactionsSectionProps {
  filteredTransactions: TransactionProps[]
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
  return (
    <TransactionListContainer>
      {/*transactions loading*/}
      {isTransactionsLoading &&
        [1, 2, 3, 4].map((value) => (
          <Transaction id="loading" description="loading" amount={0} isLoading key={value} />
        ))}
      {/*transactions error*/}
      {transactionsError && (
        <CenteredContent>
          <ErrorMessage>Error: {transactionsError}</ErrorMessage>
        </CenteredContent>
      )}
      {/*transactions success*/}
      {filteredTransactions.length > 0
        ? filteredTransactions.map(({ id, description, amount }) => (
            <Transaction description={description} id={id} key={id} amount={amount} />
          ))
        : !isCardsLoading &&
          !isTransactionsLoading &&
          !transactionsError && (
            <CenteredContent>
              {amountFrom !== ''
                ? `No transactions above ${amountFrom}€`
                : 'No transactions for this card'}
            </CenteredContent>
          )}
    </TransactionListContainer>
  )
}

export default TransactionsSection
