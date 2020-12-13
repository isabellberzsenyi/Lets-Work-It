import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

const WorkoutForm = () => {
	let history = useHistory();
	const [type, setType] = useState();
	const [length, setLength] = useState('30');
	const [difficulty, setDifficulty] = useState();
	const [group, setGroup] = useState();
	const [dumbbells, setDumbbells] = useState(false);


	let length_diff = () => {
		if (type === 'interval') {
			return (
				<FormGroup className='form-group'>
					<Label className="form-labels">Choose your Workout Length:</Label>
						<Input
							style={{ width: '50%'}}
							type='select'
							name='length'
							onChange={(event) => {
								setLength(event.target.value);
							}}>
							<option value='30'>30 mins</option>
							<option value='35'>35 mins</option>
							<option value='40'>40 mins</option>
							<option value='45'>45 mins</option>
						</Input>
				</FormGroup>
			);
		} else if (type === 'circuit') {
			return (
				<FormGroup className='form-group'>
					<Label className="form-labels">Choose your Workout Difficulty:</Label>
					<FormGroup check>
						<Label check className='labels'>
							<Input
								type='radio'
								name='difficulty'
								className='opt'
								onClick={() => setDifficulty('easy')}
							/>
							Easy
						</Label>
						<Label check className='labels'>
							<Input
								type='radio'
								name='difficulty'
								className='opt'
								onClick={() => setDifficulty('medium')}
							/>
							Medium
						</Label>
						<Label check className='labels'>
							<Input
								type='radio'
								name='difficulty'
								className='opt'
								style={{ color: 'red' }}
								onClick={() => setDifficulty('difficult')}
							/>
							Hard
						</Label>
					</FormGroup>
				</FormGroup>
			);
		}
	}
	function validateForm() {
		if (type === 'interval') {
			return (length != null) && (group != null);
		} else if (type === 'circuit') {
			return (difficulty != null) && group != null;
		} else {
			// must have type
			return false;
		}
	}

	function sendData() {
		if (validateForm()) {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					type: type,
					length: length,
					difficulty: difficulty,
					group: group,
					dumbbells: dumbbells
				})
			};
			fetch('/send', requestOptions)
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log('uh oh'));
			history.push('/workout');
		}
	}

	return (
		<div>
			<Form className='workout-form'>
				<h2
					style={{
						textAlign: 'center',
						fontWeight: 'bold',
						color: '#ffb535',
						textShadow:
							'-1px -1px 0 #fff6d9, 1px -1px 0 #fff6d9, -1px 1px 0 #fff6d9, 1px 1px 0 #fff6d9',
					}}>
					Let's get to it
				</h2>
				<FormGroup tag="fieldset" className='form-group'>
					<Label className="form-labels">Choose your Workout Type:</Label>
					<FormGroup check>
						<Label check className='labels'>
							<Input
								type='radio'
								name='type'
								className='opt'
								onClick={() => setType('interval')}
							/>
							Interval
						</Label>
						<Label check className='labels'>
							<Input
								type='radio'
								name='type'
								className='opt'
								onClick={() => setType('circuit')}
							/>
							Circuit
						</Label>
					</FormGroup>
				</FormGroup>
				{length_diff()}
				<FormGroup className='form-group'>
					<Label className="form-labels">Choose your Muscle Group:</Label>
					<FormGroup check>
						<Label check className='labels'>
							<Input
								type='radio'
								name='group'
								className='opt'
								onClick={() => setGroup('full-body')}
							/>
							Full Body
						</Label>
						<Label check className='labels'>
							<Input
								type='radio'
								name='group'
								className='opt'
								onClick={() => setGroup('upper-body')}
							/>
							Upper Body
						</Label>
						<Label check className='labels'>
							<Input
								type='radio'
								name='group'
								className='opt'
								onClick={() => setGroup('lower-body')}
							/>
							Lower Body
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup check>
					<Label check className='labels'>
					<Input type="checkbox" onClick={() => setDumbbells(!dumbbells)}/>
						Use Dumbbells
					</Label>
				</FormGroup>
				<FormGroup
					check
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Button
						variant='custom'
						className='form-button'
						onClick={() => sendData()}
						>
						Work It
					</Button>
				</FormGroup>
			</Form>
		</div>
	);
}

export default WorkoutForm;
