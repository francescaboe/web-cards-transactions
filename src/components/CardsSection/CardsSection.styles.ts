import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`

export const ScrollButton = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === 'left' ? 'left: -1.5rem;' : 'right: -1.5rem;')}
  transform: translateY(-50%);
  z-index: 10;

  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 50%;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  flex-shrink: 0;
`

export const CardsSectionContainer = styled.section``

export const AllCardsContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 250px;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;

  /* Hide scrollbar for WebKit and Firefox */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none;
  }
`
