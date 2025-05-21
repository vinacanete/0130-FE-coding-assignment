// Wk 14  Coding Assignment
//   - It has at least 3 React components
//   - It’s displaying the test data
//   - It’s using at least 1 prop on your own components
//   - No red errors/warnings in the console in the browser
//   - No type errors in VS Code

// Wk 15 Coding Assignment
//   - A user can create new items (the new items will all have the same data)
//   - A user can delete items
//   - A user can update at least one property on the items

// Wk 16 Coding Assignment
//   - It has either a create form or an update form with at least 2 inputs

import { useState } from "react"
import BalanceOverview from "../components/BalanceOverview"
import SavingGoal from "../components/SavingGoal"
import TransactionForm from "../components/TransactionForm"
import Transactions from "../components/Transactions"

	// async function fetchTransactions() {
	// 	const response = await fetch(`http://localhost:3000/transactions/?account_type=${type}`);
	// 	const data = await response.json()
	// 	console.log(data)
	// 	return data.result
	// }

  //lookup soft delete and hard delete

const checking = [ 
    {"id": "0", 
      "date": "2025-05-01",
      "category": "income",
      "type": "credit",
      "description": "Paycheck", 
      "amount": "5000"
     },
     {"id": "1", 
      "date": "2025-05-02",
      "category": "housing",
      "type": "debit",
      "description": "House mortgage payment", 
      "amount": "2500"
     },
     {"id": "2", 
      "date": "2025-05-01",
      "category": "entertainment",
      "type": "credit",
      "description": "Netflix", 
      "amount": "19.99"
     },
     {"id": "3", 
      "date": "2025-04-24",
      "category": "shopping",
      "type": "debit",
      "description": "TJ Maxx", 
      "amount": "240"
     },
     {"id": "4", 
      "date": "2025-04-01",
      "category": "dining out",
      "type": "credit",
      "description": "April Savings", 
      "amount": "200"
     }
   ]

   const savings = [ 
    {"id": "1", 
      "date": "2025-04-01",
      "category": "transfer",
      "type": "credit",
      "description": "April Savings", 
      "amount": "200"
     },
     {"id": "2", 
      "date": "2025-02-13",
      "category": "transfer",
      "type": "credit",
      "description": "February Savings", 
      "amount": "1500"
     },
     {"id": "3", 
      "date": "2025-01-21",
      "category": "transfer",
      "type": "credit",
      "description": "Furniture sale", 
      "amount": "3000"
     }
   ]

   const goal = [
    {"id": "0", 
      "name": "Pet fund",
      "amount": "5000",
      "balance": "500",
      "progress": "10"
     },
     {"id": "1", 
      "name": "New Car",
      "amount": "20000",
      "balance": "4000",
      "progress": "20"
     }
   ]

   export type Transaction = {
    id: string,
    date: string,
    category: string,
    type: string,
    description: string,
    amount: string
  }
   export type Goal = {
    id: string,
    name: string,
    amount: string,
    balance: string,
    progress: string
  }


export default function App(){

  const [checkingTransactions, setCheckingTransactions] = useState<Transaction[]>(checking);
  const [savingsTransactions, setSavingsTransactions] = useState<Transaction[]>(savings);
  const [goalList, setGoalList] = useState<Goal[]>(goal);


	return (
    <div className="container-fluid p-5 bg-dark">
        <div className="row m5" style={{width: "100vw", height: "100vh"}}>
            <div className="col-md-4 m-3 p-3 bg-light rounded">
                <TransactionForm transactions={[checkingTransactions, savingsTransactions]} setters={[setCheckingTransactions, setSavingsTransactions]} />
            </div>
            <div className="col-md-6 m-3 p-3 bg-light rounded">
                <BalanceOverview/>
                <Transactions transactions={checkingTransactions} type="checking"/>
                <Transactions transactions={savingsTransactions} type="savings"/>
                <SavingGoal goals={goalList} setGoalList={setGoalList}/>
            </div>
        </div>
	</div>
    )
}