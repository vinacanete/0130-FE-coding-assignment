import { useState, type ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import type { Transaction } from "../views/App";

export default function TransactionForm({transactions, setters}: {
	//array with arrays of transactions (checking and savings)
	transactions: Transaction[][], 
	setters: any[]}
) {
	const [form, setForm] = useState({
		type: "debit",
		account: "1",
		description: "",
		category: "",
		amount: ""
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let getter = transactions[0];
		let setter = setters[0];

		if (form.account === "2") {
			getter = transactions[1];
			setter = setters[1];
		}

		const newTransaction = {
			id: getter.length + 1,
			// the .toISOString() method converts a date to a string in the ISO format (YYYY-MM-DDTHH:mm:ss.sssZ) and we use split("T") to get the date part only
			date: new Date().toISOString().split("T")[0],
			type: form.type,
			description: form.description,
			category: form.category,
			amount: form.amount
		};
		setForm({
			type: "debit",
			account: "1",
			description: "",
			category: "",
			amount: ""
		});
		
		setter([...getter, newTransaction]);
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement >) => 
		setForm({
			...form, 
			[e.target.name]: e.target.value
		})

	return (
	<div className="d-flex flex-column">
		<h2> New Transactions </h2> 
		<form onSubmit={handleSubmit}>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="type" id="flexRadioDefault1" value="credit" checked={form.type === "credit"} onChange={handleInputChange}/>
				<label className="form-check-label" htmlFor="type-credit">
					Credit +
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="type" id="flexRadioDefault2" value="debit" checked={form.type === "debit"} onChange={handleInputChange}/>
				<label className="form-check-label" htmlFor="type-debit">
					Debit -
				</label>
			</div>
			<div className="mb-3">
				<label htmlFor="account" className="form-label">Account</label>
				<select className="form-select" name="account" value={form.account} onChange={handleInputChange}>
					<option value="1">Checking</option>
					<option value="2">Savings</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">Description</label>
				<input type="text" className="form-control" id="description" name="description" value={form.description} onChange={handleInputChange}/>
			</div>
				<div className="mb-3">
								
					<label htmlFor="category" className="form-label">Category</label>
					<select className="form-select" name="category" value={form.category} onChange={handleInputChange}>
						<option>Select a category</option>
						<option value="Income">Income</option>
						<option value="Housing">Housing</option>
						<option value="Utilities">Utilities</option>
						<option value="Groceries">Groceries</option>
						<option value="Transportation">Transportation</option>
						<option value="Dining Out">Dining Out</option>
						<option value="Entertainment">Entertainment</option>
						<option value="Transfer">Transfer</option>
					</select>
				</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">Amount</label>
				<input type="number" className="form-control" name="amount" id="amount" value={form.amount} onChange={handleInputChange}/>
			</div>
			<Button type="submit" variant="primary"> Submit </Button>
		</form>
	</div>
	)
}