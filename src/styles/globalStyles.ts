import { createGlobalStyle } from 'styled-components'
/**
 * Global styles
 * (sort fo replacing index.css)applies basic styling to the whole document
 **/
export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}

  }
`

export default GlobalStyles
