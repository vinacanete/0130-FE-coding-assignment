export default function TransactionForm() {
	return (
	<div className="d-flex flex-column">
		<h2> New Transaction </h2> 
		<form>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="type-credit" id="flexRadioDefault1"/>
				<label className="form-check-label" htmlFor="type-credit">
					Credit +
				</label>
			</div>
			<div className="form-check">
				<input className="form-check-input" type="radio" name="type-debit" id="flexRadioDefault2" defaultChecked/>
				<label className="form-check-label" htmlFor="type-debit">
					Debit -
				</label>
			</div>
			<div className="mb-3">
				<label htmlFor="account" className="form-label">Account</label>
				<select className="form-select">
					<option defaultValue="Account Type"></option>
					<option value="1">Checking</option>
					<option value="2">Savings</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">Description</label>
				<input type="text" className="form-control" id="description" />
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">Category</label>
				<select className="form-select">
					<option defaultValue="Select a category"></option>
					<option value="1">Income</option>
					<option value="2">Housing</option>
					<option value="3">Utilities</option>
					<option value="4">Groceries</option>
					<option value="5">Transportation</option>
					<option value="6">Dining Out</option>
					<option value="7">Entertainment</option>
					<option value="8">Transaction</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">Amount</label>
				<input type="number" className="form-control" id="amount" />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		<div className="alert alert-success mt-3" role="alert">
			Transaction added successfully!
		</div>
	</div>
	)
}