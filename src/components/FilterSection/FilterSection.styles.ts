import styled from 'styled-components'

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
export const FilterInput = styled.input`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  margin: ${(props) => `${props.theme.spacing.sm} 0 `};
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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
