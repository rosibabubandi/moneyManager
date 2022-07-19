import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionsList = []

class MoneyManager extends Component {
  state = {
    transactionsList: initialTransactionsList,
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].optionId,
  }

  onAddTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddAmount = event => {
    const enteredAmount = parseInt(event.target.value)
    this.setState({amount: enteredAmount})
  }

  onAddType = event => {
    this.setState({transactionType: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, transactionType} = this.state

    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        transactionType,
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        transactionType: transactionTypeOptions[0].optionId,
      }))
    }
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({transactionsList: filteredList})
  }

  render() {
    const {transactionsList, title, amount, transactionType} = this.state
    return (
      <div className="main-container">
        <div className="top-banner">
          <h1 className="top-banner-heading">Hi, Richard</h1>
          <p className="top-banner-paragraph">
            Welcome back to your
            <span className="top-banner-span-element"> Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails transactionsList={transactionsList} />
        </ul>
        <div className="form-history-container">
          <div className="form-container">
            <h1 className="form-add-transaction-text">Add Transaction</h1>
            <form
              className="only-form-container"
              onSubmit={this.onAddTransaction}
            >
              <label htmlFor="titleInput" className="form-label-styles">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.onAddTitle}
                type="text"
                id="titleInput"
                className="form-input-element"
                placeholder="TITLE"
              />
              <label htmlFor="amountInput" className="form-label-styles">
                AMOUNT
              </label>
              <input
                value={amount}
                onChange={this.onAddAmount}
                type="text"
                id="amountInput"
                className="form-input-element"
                placeholder="AMOUNT"
              />
              <label htmlFor="transactionType" className="form-label-styles">
                TYPE
              </label>
              <select
                value={transactionType}
                onChange={this.onAddType}
                id="optionId"
                className="select-dropdown-element"
              >
                <option
                  selected
                  className="select-option-styles"
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  className="select-option-styles"
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-text">History</h1>
            <div className="history-top-heads-container">
              <p className="history-top-heads-styles">Title</p>
              <p className="history-top-heads-styles">Amount</p>
              <p className="history-top-heads-styles">Type</p>
            </div>
            {transactionsList.length > 0 ? (
              <ul className="history-ul-container">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
