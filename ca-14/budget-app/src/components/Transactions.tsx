export default function Transactions({ type }) {
	async function fetchTransactions() {
		const response = await fetch(`http://localhost:3000/transactions/?account_type=${type}`);
		const data = await response.json()
		console.log(data)
		return data.result
	}

	return (
	<div className="d-flex flex-column">
		<h2> {type} </h2>
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Description</th>
					<th scope="col">Category</th>
					<th scope="col">Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>05/01/2025</td>
					<td>Groceries</td>
					<td>Food</td>
					<td>$50.00</td>
				</tr>
				<tr>
					<td>05/02/2025</td>
					<td>Rent</td>
					<td>Housing</td>
					<td>$1200.00</td>
				</tr>
			</tbody>
		</table>
	</div>
	)
}