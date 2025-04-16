import React from 'react'
import { LayoutContainer } from './Layout.styles.ts'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout
