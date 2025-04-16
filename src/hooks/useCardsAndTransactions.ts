import { useEffect, useState } from 'react'
import { Card, getCards, getTransactions, Transaction as TransactionProps } from 'ApiClient'
/**
 A hook to manage fetching and filtering operations separately.
 Return
 - cards array plus their loading and error states
 - transactions array of the selected card, plus their loading and error states
 - filter form state that allows to set and display the filter value

 * */
function useCardsAndTransactions() {
  //cards state
  const [cards, setCards] = useState<Card[]>([])
  const [isCardsLoading, setIsCardsLoading] = useState<boolean>(false)
  const [cardsError, setCardsError] = useState<string | null>(null)
  const [selectedCardId, setSelectedCardId] = useState<string>('')

  //transactions state
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [isTransactionsLoading, setIsTransactionsLoading] = useState<boolean>(false)
  const [transactionsError, setTransactionsError] = useState<string | null>(null)
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionProps[]>([])
  const [amountFrom, setAmountFrom] = useState<string>('')

  // on component mount fetch the cards
  useEffect(() => {
    setIsCardsLoading(true)
    getCards()
      .then((data) => {
        setCards(data)
        if (data.length > 0) setSelectedCardId(data[0].id)
      })
      .catch((err) => setCardsError(err.message))
      .finally(() => setIsCardsLoading(false))
  }, [])

  // when first/new card is selected fetch the corresponding transactions
  useEffect(() => {
    if (!selectedCardId || isTransactionsLoading) return
    setIsTransactionsLoading(true)
    // reset filter on card change
    setAmountFrom('')
    // fetch correct transactions ofr the selected card
    getTransactions(selectedCardId)
      .then((data) => setTransactions(data))
      .catch((err) => setTransactionsError(err.message))
      .finally(() => setIsTransactionsLoading(false))
  }, [selectedCardId])

  // whenever transactions changes, update filtered transactions
  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  // handle new card selection
  const onCardSelect = (cardId: string) => {
    // prevent selecting a new card while already fetching or if the card is already selected
    if (isTransactionsLoading || cardId === selectedCardId) return
    setTransactions([])
    setSelectedCardId(cardId)
  }

  // handle transactions filtering
  const onFilterTransactions = () => {
    if (!amountFrom) setTransactions(transactions)
    // filter logic here
    setFilteredTransactions(
      transactions.filter((transaction) => transaction.amount >= Number(amountFrom)),
    )
  }

  // handle filter value change
  const onFilterValueChange = (newAmount: string) => {
    setAmountFrom(newAmount)
  }

  return {
    // card stuff
    cards,
    isCardsLoading,
    cardsError,
    selectedCardId,
    // small array so, not too bad for performance
    selectedCardData: cards.find((card) => card.id === selectedCardId),
    onCardSelect,

    // transaction stuff
    filteredTransactions,
    isTransactionsLoading,
    transactionsError,
    onFilterTransactions,

    // form stuff
    amountFrom,
    onFilterValueChange,
  }
}

export default useCardsAndTransactions
