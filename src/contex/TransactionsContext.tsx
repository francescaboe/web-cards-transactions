import { createContext, use, ReactNode } from 'react'
import { useTransactions, TransactionsContextType } from 'hooks/useTransactions.ts'
import { useCardsContext } from 'contex/CardsContext.tsx'

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const { selectedCardId } = useCardsContext()
  const transactionsData = useTransactions(selectedCardId)

  return <TransactionsContext value={transactionsData}>{children}</TransactionsContext>
}

export function useTransactionsContext() {
  const context = use(TransactionsContext)
  if (context === undefined) {
    throw new Error('useTransactionsContext must be used within a TransactionsProvider')
  }
  return context
}
