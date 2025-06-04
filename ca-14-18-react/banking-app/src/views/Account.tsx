import { useEffect, useState } from "react"
import BalanceOverview from "../components/BalanceOverview"
import TransactionForm from "../components/TransactionForm"
import Transactions from "../components/Transactions"


export type Transaction = {
  id: string | undefined,
  date: string,
  category: string,
  type: string,
  description: string,
  amount: string,
  account: string
}


export default function App() {

  const [checkingTransactions, setCheckingTransactions] = useState<Transaction[]>([]);
  const [savingsTransactions, setSavingsTransactions] = useState<Transaction[]>([]);

  // Fetch transactions from the API
  const fetchTransactions = async () => {
    const response = await fetch("https://683ba7d328a0b0f2fdc51fbe.mockapi.io/transactions", {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    const data = await response.json()
    setCheckingTransactions(data.filter((transaction: Transaction) => transaction.account === "checking"))
    setSavingsTransactions(data.filter((transaction: Transaction) => transaction.account === "savings"))

    console.log(data)
  }

  // Fetch transactions when the page loads
  useEffect(() => {
    fetchTransactions()
  }, [])


  return (
    <div className="container-fluid p-5" id="bank-bg" style={{ height: "100vw" }}>
      <div className="row m5" style={{ width: "100vw" }}>
        <div className="col-md-4 m-3 p-3 bg-light rounded">
          <TransactionForm fetchTransactions={fetchTransactions} />
        </div>
        <div className="col-md-6 m-3 p-3 bg-light rounded">
          <BalanceOverview />
          <Transactions transactions={checkingTransactions} fetchTransactions={fetchTransactions} type="checking" />
          <Transactions transactions={savingsTransactions} fetchTransactions={fetchTransactions} type="savings" />
        </div>
      </div>
    </div>
  )
} 