import { useEffect, useState, useMemo } from 'react'
import { getTransactions, Transaction } from 'ApiClient'

export interface TransactionsContextType {
  originalTransactions: Transaction[]
  displayedTransactions: Transaction[]
  isTransactionsLoading: boolean
  transactionsError: string | null
  amountFilter: string
  onFilterValueChange: (value: string) => void
}

export function useTransactions(cardId: string): TransactionsContextType {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isTransactionsLoading, setIsTransactionsLoading] = useState<boolean>(false)
  const [transactionsError, setTransactionsError] = useState<string | null>(null)
  const [amountFilter, setAmountFilter] = useState<string>('')

  useEffect(() => {
    if (!cardId) return

    setTransactionsError(null)
    setIsTransactionsLoading(true)
    setAmountFilter('')
    setTransactions([])

    getTransactions(cardId)
      .then((data) => setTransactions(data))
      .catch((err) => setTransactionsError(err.message))
      .finally(() => setIsTransactionsLoading(false))
  }, [cardId])

  const displayedTransactions = useMemo(() => {
    if (!amountFilter) return transactions
    return transactions.filter((transaction) => transaction.amount >= Number(amountFilter))
  }, [transactions, amountFilter])

  // handle filter value change and subsequent filtering
  const onFilterValueChange = (newAmount: string) => {
    setAmountFilter(newAmount)
  }

  return {
    originalTransactions: transactions,
    displayedTransactions,
    isTransactionsLoading,
    transactionsError,
    amountFilter,
    onFilterValueChange,
  }
}
