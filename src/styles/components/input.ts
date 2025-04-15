import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.fontSize.body};
  border: 1px solid ${(props) => props.theme.colors.text}30;
  border-radius: ${(props) => props.theme.borderRadius.small};
  transition: ${(props) => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text}70;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.background}90;
    cursor: not-allowed;
  }
`
