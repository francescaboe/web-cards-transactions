// components
import Layout from 'components/Layout'
import FilterSection from 'components/FilterSection'
import TransactionsSection from 'components/TransactionsSection'
// styled components
import { CenteredContent, ErrorMessage } from 'styles/components/generic.ts'
import { MainContent } from './App.styles.ts'
// hooks
import useCardsAndTransactions from 'hooks/useCardsAndTransactions.ts'
import CardsSection from 'components/CardsSection'

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

  if (cardsError)
    return (
      <CenteredContent>
        <ErrorMessage role="alert" aria-live="assertive">
          Error: {cardsError}
        </ErrorMessage>
      </CenteredContent>
    )

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
