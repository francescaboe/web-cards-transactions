import styled, { keyframes } from 'styled-components'

export const TransactionItem = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
`

export const TransactionDetail = styled.span`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.text};
  max-width: 33%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const Skeleton = styled.div`
  width: 100%;
  display: flex;
  height: 1.3rem;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 25%,
    ${(props) => props.theme.colors.background}40 50%,
    ${(props) => props.theme.colors.primary} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`
