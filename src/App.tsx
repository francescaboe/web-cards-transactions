// components
import Layout from 'components/Layout'
import CardsSection from 'components/CardsSection'
import FilterSection from 'components/FilterSection'
import TransactionsSection from 'components/TransactionsSection'
import ErrorState from 'components/ErrorState'
// styled components
import { MainContent } from './App.styles.ts'
// hooks
import useCardsAndTransactions from 'hooks/useCardsAndTransactions.ts'

function App() {
  const {
    // card stuff
    cards,
    isCardsLoading,
    cardsError,
    selectedCardId,
    selectedCardData,
    onCardSelect,
    // transaction stuff
    filteredTransactions,
    isTransactionsLoading,
    transactionsError,
    // form stuff
    amountFrom,
    onFilterValueChange,
  } = useCardsAndTransactions()

  if (cardsError) return <ErrorState error={cardsError} />

  return (
    <Layout>
      <MainContent>
        <CardsSection
          cards={cards}
          isCardsLoading={isCardsLoading}
          selectedCardData={selectedCardData}
          selectedCardId={selectedCardId}
          onCardSelect={onCardSelect}
        />
        <FilterSection
          amountFrom={amountFrom}
          isCardsLoading={isCardsLoading}
          isTransactionsLoading={isTransactionsLoading}
          transactionsError={transactionsError}
          onFilterValueChange={onFilterValueChange}
        />
        <TransactionsSection
          filteredTransactions={filteredTransactions}
          isCardsLoading={isCardsLoading}
          isTransactionsLoading={isTransactionsLoading}
          transactionsError={transactionsError}
          amountFrom={amountFrom}
        />
      </MainContent>
    </Layout>
  )
}

export default App
