import styled from 'styled-components'

export const CardsContainer = styled.div`
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

export const TransactionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.lg};
`

export const FilterContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
`
