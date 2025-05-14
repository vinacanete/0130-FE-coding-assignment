export default function BalanceOverview() {
	return(
	<div>
		<h2> Balance Overview </h2>
		<div className="d-flex justify-content-start">
			<div className="card bg-light me-3 mb-3" style={{width: "18rem"}}>
				<div className="card-header">Checking Account</div>
				<div className="card-body">
					<h3 className="card-title">$2,500.00</h3>
					<p className="card-text">Available Balance</p>
				</div>
			</div>
			<div className="card bg-light mb-3" style={{width: "18rem"}}>
				<div className="card-header">Savings Account</div>
				<div className="card-body">
					<h3 className="card-title">$5,000.00</h3>
					<p className="card-text">Available Balance</p>
				</div>
			</div>
		</div>
	</div>
	)
}