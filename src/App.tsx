// components
import Layout from 'components/Layout'
import CardsSection from 'components/CardsSection'
import FilterSection from 'components/FilterSection'
import TransactionsSection from 'components/TransactionsSection'
import ErrorState from 'components/ErrorState'
// styled components
import { MainContent } from './App.styles.ts'
// hooks
import { useCardsContext } from 'contex/CardsContext.tsx'

function App() {
  const { cardsError } = useCardsContext()

  if (cardsError) return <ErrorState error={cardsError} />

  return (
    <Layout>
      <MainContent>
        <CardsSection />
        <FilterSection />
        <TransactionsSection />
      </MainContent>
    </Layout>
  )
}

export default App
