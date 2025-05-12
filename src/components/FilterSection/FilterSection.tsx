import React from 'react'
import { FilterContainer, FilterLabel, FilterInput } from './FilterSection.styles.ts'
import { useTransactionsContext } from 'contex/TransactionsContext.tsx'
import { useCardsContext } from 'contex/CardsContext.tsx'

const FilterSection: React.FC = () => {
  const { isCardsLoading } = useCardsContext()
  const {
    originalTransactions,
    amountFilter,
    isTransactionsLoading,
    transactionsError,
    onFilterValueChange,
  } = useTransactionsContext()

  // handle filter amount change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValueChange(e.target.value)
  }

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter-amount">Filter</FilterLabel>
      <FilterInput
        id="filter-amount"
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amountFilter}
        onChange={handleFilterChange}
        disabled={
          isCardsLoading ||
          isTransactionsLoading ||
          !!transactionsError ||
          originalTransactions.length === 0
        }
      />
    </FilterContainer>
  )
}

export default FilterSection
