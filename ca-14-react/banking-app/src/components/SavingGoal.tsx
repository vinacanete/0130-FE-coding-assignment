export default function SavingGoal() {
	return (
	<div className="d-flex flex-column">
		<h2> Saving Goal </h2>
		<p>When you delete a saving goal, the money will move to your savings account.</p>
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Fund Name</th>
					<th scope="col">Goal Amount</th>
					<th scope="col">Balance</th>
					<th scope="col">Progress</th>
					<th scope="col"></th>

				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Pet fund
					</td>
					<td>
						5000
					</td>
					<td>
						500
					</td>
					<td>
					10%
					</td>
					<td>
					<button className="btn btn-danger">Delete</button>
					</td>
				</tr>

				<tr>
					<td>
						New Car
					</td>
					<td>
						20000
					</td>
					<td>
						4000
					</td>
					<td>
					20%
					</td>
					<td>
					<button className="btn btn-danger">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	)
}