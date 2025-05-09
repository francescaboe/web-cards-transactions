import React from 'react'
import { FilterContainer, FilterLabel, FilterInput } from './FilterSection.styles.ts'

interface FilterSectionProps {
  amountFrom: string
  isCardsLoading: boolean
  isTransactionsLoading: boolean
  transactionsError: string | null
  onFilterValueChange: (value: string) => void
}

const FilterSection: React.FC<FilterSectionProps> = ({
  amountFrom,
  isCardsLoading,
  isTransactionsLoading,
  transactionsError,
  onFilterValueChange,
}) => {
  // handle filter amount change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValueChange(e.target.value)
  }

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter-amount">Minimum Amount Filter</FilterLabel>
      <FilterInput
        id="filter-amount"
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amountFrom}
        onChange={handleFilterChange}
        disabled={isCardsLoading || isTransactionsLoading || !!transactionsError}
      />
    </FilterContainer>
  )
}

export default FilterSection
