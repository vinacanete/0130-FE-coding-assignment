// It has at least 3 React components
// It’s displaying the test data
// It’s using at least 1 prop on your own components
// No red errors/warnings in the console in the browser
// No type errors in VS Code

import BalanceOverview from "../components/BalanceOverview"
import TransactionForm from "../components/TransactionForm"
import Transactions from "../components/Transactions"

export default function App(){
	return (
    <div className="container p-5 bg-dark">
        <div className="row g-4 align-items-start" style={{width: "100vw"}}>
            <div className="col p-3 bg-light rounded">
                <TransactionForm/>
            </div>
            <div className="col p-3 bg-light rounded">
                <BalanceOverview/>
                <Transactions type="Checking"/>
                <Transactions type="Savings"/>
            </div>
        </div>
	</div>
    )
}