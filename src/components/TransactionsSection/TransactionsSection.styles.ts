import styled from 'styled-components'

export const TransactionListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.lg};
  padding-bottom: ${(props) => props.theme.spacing.md};
`
