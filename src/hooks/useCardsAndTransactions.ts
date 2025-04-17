import { useEffect, useState } from 'react'
import { Card, getCards, getTransactions, Transaction as TransactionProps } from 'ApiClient'
/**
 A hook to manage fetching and filtering operations separately from the ui.
 Return
 - cards array plus their loading and error states
 - transactions array of the selected card, plus their loading and error states
 - filter input state that allows to set and display the filter value

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

  // filter state
  const [amountFrom, setAmountFrom] = useState<string>('')

  // on component mount fetch the cards
  useEffect(() => {
    setCardsError(null)
    setTransactionsError(null)
    setIsCardsLoading(true)
    getCards()
      .then((data) => {
        setCards(data)
        if (data.length > 0) setSelectedCardId(data[0].id)
      })
      .catch((err) => setCardsError(err.message))
      .finally(() => setIsCardsLoading(false))
  }, [])

  // when first/a new card is selected fetch the corresponding transactions
  useEffect(() => {
    if (!selectedCardId || isTransactionsLoading) return
    setCardsError(null)
    setTransactionsError(null)
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

  // handle filter value change and subsequent filtering
  const onFilterValueChange = (newAmount: string) => {
    setAmountFrom(newAmount)
  }

  // apply filter to displayed transactions whenever filter value changes
  // could maybe also implement execution delay? discuss
  useEffect(() => {
    if (!amountFrom) setFilteredTransactions(transactions)
    // filter transactions
    setFilteredTransactions(
      transactions.filter((transaction) => transaction.amount >= Number(amountFrom)),
    )
  }, [amountFrom, transactions])

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

    // form stuff
    amountFrom,
    onFilterValueChange,
  }
}

export default useCardsAndTransactions
