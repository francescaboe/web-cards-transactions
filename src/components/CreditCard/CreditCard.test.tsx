/*import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CreditCard from './CreditCard'

describe('CreditCard Component', () => {
  it('renders credit card with description and id', () => {
    render(<CreditCard id="123" description="Test Card" />)
    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('ID: 123')).toBeInTheDocument()
  })

  it('displays loading state correctly', () => {
    render(<CreditCard id="123" description="Test Card" isLoading={true} />)
    expect(screen.getByRole('generic', { busy: true })).toBeInTheDocument()
  })

  it('shows selected state styling', () => {
    render(<CreditCard id="123" description="Test Card" isSelected={true} />)
    const container = screen.getByRole('generic')
    expect(container).toHaveStyle('border: 2px solid primary')
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<CreditCard id="123" description="Test Card" onClick={handleClick} />)
    fireEvent.click(screen.getByRole('generic'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})*/
