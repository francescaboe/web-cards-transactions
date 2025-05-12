import React from 'react'
import { CenteredContent } from 'styles/components/generic.ts'
import { ErrorMessage } from 'components/ErrorState/ErrorState.styles.ts'

interface ErrorStateProps {
  error: string | null
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => (
  <CenteredContent>
    <ErrorMessage role="alert" aria-live="assertive">
      Error: {error}
    </ErrorMessage>
  </CenteredContent>
)
export default ErrorState
