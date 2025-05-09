import Transaction from 'components/Transaction'

const TransactionsLoadingState = () => (
  <>
    {[1, 2, 3, 4].map((index) => (
      <Transaction
        id="loading"
        description="loading"
        amount={0}
        isLoading
        key={`skeleton-${index}`}
      />
    ))}
  </>
)

export default TransactionsLoadingState
