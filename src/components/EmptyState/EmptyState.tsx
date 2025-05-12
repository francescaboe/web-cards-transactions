import React, { ReactNode } from 'react'
import { CenteredContent } from 'styles/components/generic.ts'

interface EmptyStateProps {
  message: string | ReactNode
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <CenteredContent>{message}</CenteredContent>
)

export default EmptyState
