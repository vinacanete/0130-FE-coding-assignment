export default function Transactions({ type, transactions }: { type: string, transactions: any[] }) {
	return (
	<div className="d-flex flex-column">
		<h2> {type.charAt(0).toUpperCase() + type.slice(1)} </h2>
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Description</th>
					{ type === "checking" && (
						<th scope="col">Category</th>
					)}
					<th scope="col">Amount</th>
				</tr>
			</thead>
			<tbody>
			{transactions.map( transaction => (
				<tr key={transaction.id}>
					<td>
						{transaction.date}
					</td>
					{ type === "checking" && (
						<td>
							{transaction.category_name}
						</td>
					)}
					<td>
						{transaction.description}
					</td>
					<td>
						{transaction.amount}
					</td>
				</tr>)
			)}
			</tbody>
		</table>
	</div>
	)
}