import { useState, type ChangeEvent } from 'react';
import {Button, Form, Modal} from 'react-bootstrap'; 
import type { Goal } from '../views/App';

export default function SavingGoal({goals, setGoalList}: {
		goals: Goal[],
		setGoalList: (goals: any[]) => void
		}) {
	const [show, setShow] = useState(false);
	const [editId, setEditId] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = (id: string) => {
		setEditId(id);
		setShow(true);
		setGoalForm({
			"id": id,
			"name": goals.find(goal => goal.id === id)?.name || "",
			"amount": goals.find(goal => goal.id === id)?.amount || "",
			"balance": goals.find(goal => goal.id === id)?.balance || "",
			"progress": goals.find(goal => goal.id === id)?.progress || ""
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

	const handleDelete = (idToDelete: string) => {
		const newGoalList = goals.filter((goal) => goal.id !== idToDelete);
		setGoalList(newGoalList);
	  }

	const handleSave = (e: React.FormEvent<HTMLFormElement>, id: string) => {
		e.preventDefault();

		const newGoal = {
			id: id || (goals.length + 1).toString(),
			name: goalForm.name,
			amount: goalForm.amount,
			balance: goalForm.balance,
			progress: goalForm.progress
		};

		setGoalForm({
			"id": "0", 
			"name": "",
			"amount": "",
			"balance": "",
			"progress": ""
		});
		
		if (id) {
			setGoalList(goals.map(goal => (
				goal.id !== editId ? goal : newGoal
			)));
		} else {
			setGoalList([...goals, newGoal]);
		}
		
		handleClose();
	}


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
			{goals.map( goal => (
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
					<button className="btn btn-danger" onClick= {() => handleDelete(goal.id)}>Delete</button>
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
					<Form.Control className="mb-3" name="name" type="text" placeholder="Enter fund name" value={goalForm.name} onChange={handleInputChange}/>
					<Form.Label>Goal Amount</Form.Label>
					<Form.Control className="mb-3" name="amount" type="text" placeholder="Enter amount" value={goalForm.amount} onChange={handleInputChange}/>
					<Form.Label>Balance</Form.Label>
					<Form.Control className="mb-3" name="balance" type="text" placeholder="Enter amount" value={goalForm.balance} onChange={handleInputChange}/>
					<Form.Label>Progress</Form.Label>
					<Form.Control className="mb-3" name="progress" type="text" placeholder="Enter amount" value={goalForm.progress} onChange={handleInputChange}/>
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