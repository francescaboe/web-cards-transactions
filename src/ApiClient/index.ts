// import { cards } from "./data/cards";
// import { transactions } from "./data/transactions";
export interface Card {
  id: string
  description: string
}

export interface Transaction {
  id: string
  description: string
  amount: number
}

export async function getCards(): Promise<Card[]> {
  // simulate 1.5s delay
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const cards = await (await import('./data/cards.json')).default
  if (cards) return cards

  throw new Error('No cards found')
}

export async function getTransactions(cardId: string): Promise<Card[]> {
  const transactions: Record<string, Transaction[]> = await (
    await import('./data/transactions.json')
  ).default

  if (transactions[cardId]) {
    return transactions[cardId]
  }

  throw new Error('cardId not found')
}
