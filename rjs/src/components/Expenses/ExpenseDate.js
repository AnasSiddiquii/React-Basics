import React from "react"

import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US",{month: 'long'})
    const year  = props.date.getFullYear()
    const day   = props.date.toLocaleString("en-US",{day: '2-digit'})
    return (
            <div className="expensedate">
                <div className="expensedate_month">{ month }</div>
                <div className="expensedate_year">{ year }</div>
                <div className="expensedate_day">{ day }</div>
            </div>
           )

}

export default ExpenseDate