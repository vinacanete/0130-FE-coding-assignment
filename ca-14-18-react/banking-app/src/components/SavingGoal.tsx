import { useEffect, useState, type ChangeEvent } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export type Goal = {
	id?: string | undefined,
	name: string,
	amount: string,
	balance: string,
	progress: string
}



export default function SavingGoal() {
	const [goalList, setGoalList] = useState<Goal[]>([]);

	// Fetch goals from the API
	const fetchGoals = async () => {
		const response = await fetch("https://683ba7d328a0b0f2fdc51fbe.mockapi.io/goal", {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
		const data = await response.json()
		setGoalList(data)
	}
	// Fetch goals when the page loads
	useEffect(() => {
		fetchGoals()
	}, [])


	const [show, setShow] = useState(false);
	const [editId, setEditId] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = (id: string | undefined) => {
		setEditId(id || "");
		setShow(true);
		setGoalForm({
			"id": id || "",
			"name": goalList.find(goal => goal.id === id)?.name || "",
			"amount": goalList.find(goal => goal.id === id)?.amount || "",
			"balance": goalList.find(goal => goal.id === id)?.balance || "",
			"progress": goalList.find(goal => goal.id === id)?.progress || ""
		});
	};

	const [goalForm, setGoalForm] = useState({
		"id": "0",
		"name": "",
		"amount": "",
		"balance": "",
		"progress": ""
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setGoalForm({
			...goalForm,
			[e.target.name]: e.target.value
		})

	const handleDelete = (idToDelete: string | undefined) => {

		fetch(`https://683ba7d328a0b0f2fdc51fbe.mockapi.io/goal/${idToDelete}`, {
			method: 'DELETE',
		}).then(res => {
			if (res.ok) {
				// Refresh the goals list after deletion
				fetchGoals();
				return res.json();
			}
			// handle error
		}).catch(error => {
			throw new Error("Error creating transaction: " + error.message);
		})
	}


	const handleSave = (e: React.FormEvent<HTMLFormElement>, id: string | undefined) => {
		e.preventDefault();

		const newGoal: Goal = {
			name: goalForm.name,
			amount: goalForm.amount,
			balance: goalForm.balance,
			progress: goalForm.progress
		};

		if (id) {
			newGoal.id = id;
		}

		setGoalForm({
			"id": "0",
			"name": "",
			"amount": "",
			"balance": "",
			"progress": ""
		});

		if (id) {
			console.log(newGoal)
			fetch(`https://683ba7d328a0b0f2fdc51fbe.mockapi.io/goal/${id}`, {
				method: 'PUT',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(newGoal)
			}).then(res => {
				if (res.ok) {
					// Update the goal after update
					fetchGoals();
					return res.json();
				}
				// handle error
			}).catch(error => {
				throw new Error("Error creating transaction: " + error.message);
			})

		} else {
			fetch('https://683ba7d328a0b0f2fdc51fbe.mockapi.io/goal', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(newGoal)
			}).then(res => {
				if (res.ok) {
					fetchGoals();
					return res.json();
				}
				// handle error
			}).catch(error => {
				throw new Error("Error creating transaction: " + error.message);
			})
		}

		handleClose();
	}


	return (
		<div className="d-flex flex-column">
			<h2> Saving Goal </h2>
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
					{goalList.map(goal => (
						<tr key={goal.id}>
							<td>
								{goal.name}
							</td>
							<td>
								${goal.amount}
							</td>
							<td>
								${goal.balance}
							</td>
							<td>
								{goal.progress}%
							</td>
							<td>
								<button className="btn btn-outline-primary mx-2" onClick={() => handleShow(goal.id)}>Edit</button>
								<button className="btn btn-danger" onClick={() => handleDelete(goal.id!)}>Delete</button>
							</td>
						</tr>)
					)}
				</tbody>
			</table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Saving Goal</Modal.Title>
				</Modal.Header>
				<Form className="m-3" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSave(e, editId)}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Fund Name</Form.Label>
						<Form.Control className="mb-3" name="name" type="text" placeholder="Enter fund name" value={goalForm.name} onChange={handleInputChange} />
						<Form.Label>Goal Amount</Form.Label>
						<Form.Control className="mb-3" name="amount" type="text" placeholder="Enter amount" value={goalForm.amount} onChange={handleInputChange} />
						<Form.Label>Balance</Form.Label>
						<Form.Control className="mb-3" name="balance" type="text" placeholder="Enter amount" value={goalForm.balance} onChange={handleInputChange} />
						<Form.Label>Progress</Form.Label>
						<Form.Control className="mb-3" name="progress" type="text" placeholder="Enter amount" value={goalForm.progress} onChange={handleInputChange} />
					</Form.Group>
					<Button className="mb-3" variant="primary" type="submit">
						Save
					</Button>
				</Form>
			</Modal>
			<Button variant="primary" onClick={() => handleShow("")}> + Add New Saving Goal </Button>
		</div>
	)
}