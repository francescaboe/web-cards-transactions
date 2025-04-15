import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/globalStyles'

/**
 * ThemeProvider
 * to wrap entry point with, provides theme throughout the whole application
 **/

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
