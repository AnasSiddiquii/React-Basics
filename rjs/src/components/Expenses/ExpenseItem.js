import React from "react"

import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    // const [inputKeyTitle, inputValueTitle] = useState("")         //set input val
    
    // // const [inputKeyTitle, inputValueTitle] = useState("hi") //input fix val
    
    // const [keyTitle, valueTitle] = useState(props.title)          //change title
    
    // // const [keyTitle, valueTitle] = useState("hi")           //title fix val
    
    // let inputchange = (event) => inputValueTitle(event.target.value) //get inp val
    
    // // let buttonclick = () => valueTitle("hi")                //button fix val

    // let buttonclick = () => valueTitle(inputKeyTitle)                //button

    return (
            <Card className='expenseitem'>

                <ExpenseDate date={ new Date (props.date) }/>

                <div className='expenseitem_desc'>

                    <h2>{ props.title }</h2>

                    <div className='expenseitem_price'>${ props.amount }</div>

                    {/* <input onChange= {inputchange} type="text" value={inputKeyTitle} />

                    <button onClick = {buttonclick} >Change Title</button> */}
               
                </div>
            </Card>
            
    )
}

export default ExpenseItem