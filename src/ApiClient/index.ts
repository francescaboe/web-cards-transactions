// import { cards } from "./data/cards";
// import { transactions } from "./data/transactions";

/**
 * Here I just added the error for no cards, to also test the error state in the component
 * and changed the Promise type of getTransactions to Transactions[]
 * amd linted, because I can't help myself :D
 * */
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

export async function getTransactions(cardId: string): Promise<Transaction[]> {
  // simulate 1.5s delay
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const transactions: Record<string, Transaction[]> = await (
    await import('./data/transactions.json')
  ).default

  if (transactions[cardId]) {
    return transactions[cardId]
  }

  throw new Error('cardId not found')
}
