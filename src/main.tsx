import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from 'providers/ThemeProvider.tsx'
import App from './App.tsx'
import { CardsProvider } from 'contex/CardsContext.tsx'
import { TransactionsProvider } from 'contex/TransactionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CardsProvider>
        <TransactionsProvider>
          <Suspense fallback={<p>Loading cards...</p>}>
            <App />
          </Suspense>
        </TransactionsProvider>
      </CardsProvider>
    </ThemeProvider>
  </StrictMode>,
)
