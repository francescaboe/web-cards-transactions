import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const AllCardsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1000px;
  margin: 0 auto;
`

export const SelectedCardContainer = styled.div``

export const OtherCardsListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 200px;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} 0;
  scrollbar-width: none;
`

export const CardWrapper = styled.div`
  flex: 0 0 auto;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
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
