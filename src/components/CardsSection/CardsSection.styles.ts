import styled from 'styled-components'

export const AllCardsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  max-width: 1000px;
`

export const SelectedCardContainer = styled.div``

export const OtherCardsListContainer = styled.div`
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
