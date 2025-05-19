import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
// Import jest-dom for the extended matchers
import '@testing-library/jest-dom'
// Import user-event if you want to use it
import userEvent from '@testing-library/user-event'

// Providers
import ThemeProvider from 'providers/ThemeProvider.tsx'
import { CardsProvider } from 'contex/CardsContext.tsx'
import { TransactionsProvider } from 'contex/TransactionsContext.tsx'

// Wrapper component to provide any necessary providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <CardsProvider>
        <TransactionsProvider>{children}</TransactionsProvider>
      </CardsProvider>
    </ThemeProvider>
  )
}

// Custom render function that wraps the UI with AllTheProviders
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// Export all from @testing-library/react and the custom render function
export * from '@testing-library/react'
//export { userEvent }
//export * from '@testing-library/user-event' // supercharged fireEvent
export { customRender as render, userEvent }

// import in test files as: import { render, ..any-other-testing-lib-method } from 'test-utils';
// import only valid if path is specified in jest.config and tsconfig.json
