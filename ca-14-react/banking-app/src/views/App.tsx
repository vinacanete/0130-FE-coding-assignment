// It has at least 3 React components
// It’s displaying the test data
// It’s using at least 1 prop on your own components
// No red errors/warnings in the console in the browser
// No type errors in VS Code

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

const checkingTransactions = [ 
    {"id": "0", 
      "date": "2025-05-01",
      "category_name": "income",
      "type": "credit",
      "description": "Paycheck", 
      "amount": 5000
     },
     {"id": "1", 
      "date": "2025-05-02",
      "category_name": "housing",
      "type": "debit",
      "description": "House mortgage payment", 
      "amount": 2500
     },
     {"id": "2", 
      "date": "2025-05-01",
      "category_name": "entertainment",
      "type": "credit",
      "description": "Netflix", 
      "amount": 19.99
     },
     {"id": "3", 
      "date": "2025-04-24",
      "category_name": "shopping",
      "type": "debit",
      "description": "TJ Maxx", 
      "amount": 240
     },
     {"id": "4", 
      "date": "2025-04-01",
      "category_name": "dining out",
      "type": "credit",
      "description": "April Savings", 
      "amount": 200
     }
   ]

   const savingsTransactions = [ 
    {"id": "1", 
      "date": "2025-04-01",
      "category_name": "transfer",
      "type": "credit",
      "description": "April Savings", 
      "amount": 200
     },
     {"id": "2", 
      "date": "2025-02-13",
      "category_name": "transfer",
      "type": "credit",
      "description": "February Savings", 
      "amount": 1500
     },
     {"id": "3", 
      "date": "2025-01-21",
      "category_name": "transfer",
      "type": "credit",
      "description": "Furniture sale", 
      "amount": 3000
     }
   ]


export default function App(){

	return (
    <div className="container-fluid p-5 bg-dark">
        <div className="row" style={{width: "100vw", height: "100vh"}}>
            <div className="col-md-4 m-3 p-3 bg-light rounded">
                <TransactionForm/>
            </div>
            <div className="col-md-6 m-3 p-3 bg-light rounded">
                <BalanceOverview/>
                <Transactions transactions={checkingTransactions} type="checking"/>
                <Transactions transactions={savingsTransactions} type="savings"/>
                <SavingGoal/>
            </div>
        </div>
	</div>
    )
}