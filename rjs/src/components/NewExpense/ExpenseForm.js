import React,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle]   = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate]     = useState("")

    const titleChangeHandler  = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler   = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler   = (event) => {
        event.preventDefault()
        
        const expenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date  : new Date (enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        // console.log(expenseData)

        setEnteredTitle ("")
        setEnteredAmount("")
        setEnteredDate  ("")

    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <lable>Title</lable>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <lable>Amount</lable>
                    <input type="numbers" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <lable>Date</lable>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm