import styled from 'styled-components'

// using article as it represents a self-contained composition
export const CardContainer = styled.article<{ $isSelected?: boolean }>`
  width: ${(props) => (props.$isSelected ? '300px' : '200px')};
  height: ${(props) => (props.$isSelected ? '180px' : '80px')};
  opacity: ${(props) => (props.$isSelected ? 1 : 0.8)};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.primary : props.theme.colors.secondary};
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

// $ is necessary to identify isLoading as a transient property (avoids react complaining the attribute doesn't exist)
export const CardContent = styled.div<{ $isLoading?: boolean }>`
  opacity: ${(props) => (props.$isLoading ? 0 : 1)};
  transition: opacity 0.3s ease;
`

export const LoadingOverlay = styled.div<{ $isLoading?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  display: ${(props) => (props.$isLoading ? 'block' : 'none')};

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`

export const CardTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.h3};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`

export const CardId = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
`
