import styled from 'styled-components'

export const CardContainer = styled.button<{ $isSelected?: boolean; $isLoading?: boolean }>`
  all: unset;
  flex: 0 0 auto;
  opacity: ${(props) => (props.$isLoading ? 0.5 : 1)};
  width: 180px;
  height: 80px;
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.$isSelected
      ? ({ theme }) => theme.colors.primary
      : ({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.$isSelected ? 'default' : 'pointer')};
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${(props) =>
    !props.$isSelected &&
    `
    &:hover {
      filter: brightness(110%);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      transform: translateY(-10px);
    }
  `}
`

export const LoadingOverlay = styled.div<{ $isLoading?: boolean }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  animation: ${(props) => (props.$isLoading ? 'loading 1.5s infinite' : 'none')};

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

export const CardTitle = styled.span<{ $isSelected?: boolean }>`
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: ${(props) =>
    props.$isSelected
      ? ({ theme }) => theme.typography.fontSize.h3
      : ({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.heading};
`

export const CardId = styled.span<{ $isSelected?: boolean }>`
  margin: 0;
  font-size: ${(props) =>
    props.$isSelected
      ? ({ theme }) => theme.typography.fontSize.body
      : ({ theme }) => theme.typography.fontSize.small};
`
