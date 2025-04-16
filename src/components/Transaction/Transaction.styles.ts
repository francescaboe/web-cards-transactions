import styled, { keyframes } from 'styled-components'

export const TransactionItem = styled.article<{ $isLoading?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.md};
  background-color: ${(props) =>
    props.$isLoading ? props.theme.colors.primary + '80' : props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  position: relative;
  overflow: hidden;
`

export const TransactionDetail = styled.span<{ $isLoading?: boolean }>`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.text};
  max-width: 33%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: ${(props) => (props.$isLoading ? 0.5 : 1)};
`

const loadingAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`

export const LoadingOverlay = styled.div<{ $isLoading?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  animation: ${loadingAnimation} 1.5s infinite;
  display: ${(props) => (props.$isLoading ? 'block' : 'none')};
`

export const AmountDetail = styled(TransactionDetail)`
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
`

export const TransactionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`
