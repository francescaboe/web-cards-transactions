import styled from 'styled-components'

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const AllCardsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CardWrapper = styled.div<{ $isSelected?: boolean; $isLoading?: boolean }>`
  flex: 0 0 auto;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: ${(props) => (props.$isSelected || props.$isLoading ? 'none' : 'translateY(-10px)')};
  }
`

export const FilterContainer = styled.section`
  margin-bottom: ${(props) => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
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
