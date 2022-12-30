import React, { useState, useEffect } from "react";

// app < expenses < item ( < date + card ) + card

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let dummyExpenses = [];

// without api

// [
// {
//     id:'e1',
//     title:'School Fees',
//     amount:250,
//     date:new Date(2023, 3, 24)
// },

// {
//     id:'e2',
//     title:'Books',
//     amount:230,
//     date:new Date(2024, 5, 14)
// },

// {
//     id:'e3',
//     title:'House Rent',
//     amount:700,
//     date:new Date(2023, 4, 18)
// },

// {
//     id:'e4',
//     title:'Food',
//     amount:540,
//     date:new Date(2024, 6, 5)
// }
// ]

const App = () => {
  // first data format when started react

  // let expenses = [
  //     {
  //         id:'e1',
  //         title:'School Fees',
  //         amount:250,
  //         date:new Date(2023, 3, 24)
  //     },

  //     {
  //         id:'e2',
  //         title:'Books',
  //         amount:230,
  //         date:new Date(2024, 5, 14)
  //     },

  //     {
  //         id:'e3',
  //         title:'House Rent',
  //         amount:700,
  //         date:new Date(2023, 4, 18)
  //     },

  //     {
  //         id:'e4',
  //         title:'Food',
  //         amount:540,
  //         date:new Date(2024, 6, 5)
  //     }
  // ]

  const [expenses, setExpenses] = useState(dummyExpenses); // added at last

  function fetchData() {
    // fetch(`http://127.0.0.1:3500/read`)
    fetch(`https://jsonplaceholder.typicode.com/users   `)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setExpenses(data);
      });
  }

  // stops looping
  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    // fetch(`http://127.0.0.1:3500/create`)
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      //   gets tha data from db without reload
      //   .then((response) => {fetchData()})
      .then((response) => response.json())
      .then((json) => console.log(json));

    // const updatedExpense = [expense, ...expenses]; // added at last
    // setExpenses(updatedExpense); // added at last
    // console.log(expense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
