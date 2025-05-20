import { describe, it, beforeEach, vi, expect } from 'vitest'
import { render, screen } from 'test-utils'
import CardsSection from 'components/CardsSection'
import { UseCardsResultType } from 'hooks/useCards.ts'

// Dynamically controlled mock return
let mockUseCardsReturn: UseCardsResultType
// Mock the hook inside the context
vi.mock('hooks/useCards', () => ({
  useCards: () => mockUseCardsReturn,
}))

beforeEach(() => {
  // Reset return value for every test
  mockUseCardsReturn = {
    cards: [],
    isCardsLoading: false,
    cardsError: null,
    selectedCardId: '',
    onCardSelect: vi.fn(),
    selectedCardData: undefined,
  }
})

describe('<CardsSection />', () => {
  it('shows empty state', () => {
    render(<CardsSection />)
    expect(screen.getByText(/No Cards available/i)).toBeInTheDocument()
  })

  it('renders cards from context', () => {
    mockUseCardsReturn = {
      ...mockUseCardsReturn,
      cards: [
        { id: 'card-1', description: 'Card One' },
        { id: 'card-2', description: 'Card Two' },
      ],
      selectedCardId: 'card-1',
      selectedCardData: { id: 'card-1', description: 'Card One' },
    }

    render(<CardsSection />)
    expect(screen.getByText('Card One')).toBeInTheDocument()
    expect(screen.getByText('Card Two')).toBeInTheDocument()
  })

  it('shows loading cards when loading', () => {
    mockUseCardsReturn.isCardsLoading = true
    render(<CardsSection />)
    expect(screen.getAllByText(/loading/i)).toHaveLength(3)
  })
})
