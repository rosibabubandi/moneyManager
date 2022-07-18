import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, transactionType} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-li-container">
      <p className="transaction-details-text">{title}</p>
      <p className="transaction-details-text">{amount}</p>
      <p className="transaction-details-text">{transactionType}</p>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image-size"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
