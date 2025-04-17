import React from 'react'
import { LayoutContainer } from './Layout.styles.ts'

/**
 * Layout component that can be expanded in the future
 */

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout
