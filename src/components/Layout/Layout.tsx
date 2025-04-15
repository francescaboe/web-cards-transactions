import React from 'react'
import { LayoutContainer } from 'components/Layout/styled.ts'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout
