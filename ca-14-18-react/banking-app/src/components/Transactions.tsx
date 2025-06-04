import type { Transaction } from "../views/Account";

export default function Transactions({ type, transactions, fetchTransactions }: { type: string, transactions: Transaction[], fetchTransactions: () => void }) {

	const handleDelete = (idToDelete: string | undefined) => {

		fetch(`https://683ba7d328a0b0f2fdc51fbe.mockapi.io/transactions/${idToDelete}`, {
			method: 'DELETE',
		}).then(res => {
			if (res.ok) {
				// Refresh the goals list after deletion
				fetchTransactions();
				return res.json();
			}
			// handle error
		}).catch(error => {
			throw new Error("Error creating transaction: " + error.message);
		})
	}

	return (
		<div className="d-flex flex-column">
			<h2> {type.charAt(0).toUpperCase() + type.slice(1)} </h2>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Description</th>
						{type === "checking" && (
							<th scope="col">Category</th>
						)}
						<th scope="col">Amount</th>
						<th scope="col"> </th>
					</tr>
				</thead>
				<tbody>
					{transactions.map(transaction => (
						<tr key={transaction.id}>
							<td>
								{transaction.date}
							</td>
							{type === "checking" && (
								<td>
									{transaction.category}
								</td>
							)}
							<td>
								{transaction.description}
							</td>
							<td>
								${transaction.amount}
							</td>
							<td>
								<button className="btn btn-outline-danger" onClick={() => handleDelete(transaction.id)}>X</button>
							</td>
						</tr>)
					)}
				</tbody>
			</table>
		</div>
	)
}