import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const CardsContainer = styled.section`
  display: flex;
`

export const CardListContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  overflow-x: auto;
  padding: ${(props) => props.theme.spacing.md} 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: ${(props) => props.theme.spacing.sm};
  }
`

export const FilterContainer = styled.section`
  margin-bottom: ${(props) => props.theme.spacing.md};
`
export const FilterLabel = styled.label`
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  padding: ${(props) => `${props.theme.spacing.md} 0`};
  margin: ${(props) => `${props.theme.spacing.md} 0`};
`

export const TransactionListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.md};
`
