import styled from 'styled-components'
// max-width to 1000 for large screens
export const LayoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
`
