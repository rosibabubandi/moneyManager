import './index.css'

const MoneyDetails = props => {
  const {transactionsList} = props
  let totalIncome = 0
  let totalExpenditure = 0

  transactionsList.forEach(transaction => {
    if (transaction.transactionType === 'Income') {
      totalIncome += transaction.amount
    } else {
      totalExpenditure += transaction.amount
    }
  })
  const totalBalance = totalIncome - totalExpenditure

  return (
    <>
      <li className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-size"
          alt="balance"
        />
        <div className="amount-text-container">
          <p className="amount-text">Your Balance</p>
          <p className="amount-number-text" testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image-size"
          alt="income"
        />
        <div className="amount-text-container">
          <p className="amount-text">Your Income</p>
          <p className="amount-number-text" testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="expenditure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image-size"
          alt="expenses"
        />
        <div className="amount-text-container">
          <p className="amount-text">Your Expenses</p>
          <p className="amount-number-text" testid="expensesAmount">
            Rs {totalExpenditure}
          </p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
