import React from "react"

import './Expenses.css'

import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'


const Expenses = (props) => {
    return (
            <Card className="expenses">
                
                {
                    props.items.map(          // getting data from child 1 by 1
                        expense => (
                            <ExpenseItem
                                key   ={expense.id}
                                date  ={expense.id}
                                title ={expense.name}
                                amount={expense.id}
                                // title ={expense.title}
                                // amount={expense.amount} 
                                />
                        )
                    )
                }

{/*                 <ExpenseItem
                    date={props.items[0].date}
                    title={props.items[0].title}
                    amount={props.items[0].amount} />
                
                <ExpenseItem
                    date={props.items[1].date}
                    title={props.items[1].title}
                    amount={props.items[1].amount} />
                
                <ExpenseItem
                    date={props.items[2].date}
                    title={props.items[2].title}
                    amount={props.items[2].amount} />
            
                <ExpenseItem
                    date={props.items[3].date}
                    title={props.items[3].title}
                    amount={props.items[3].amount} /> */}
            
            </Card>
    )
}

export default Expenses