import styled from 'styled-components'

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  background: ${(props) => props.theme.colors.error}40;
  padding: ${(props) => `${props.theme.spacing.md}`};
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  margin: ${(props) => props.theme.spacing.xs};
  max-width: 100%;
  width: fit-content;
  white-space: pre-line;
`
