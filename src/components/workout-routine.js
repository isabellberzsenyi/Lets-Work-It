import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import WorkoutResult from './workout-result';
import { useHistory } from "react-router-dom";

function Workout() {
	let history = useHistory();
	return (
		<div className='component'>
			<Container>
				<Row>
					<Col md={{ size: '2' }}>
						<Button className='back-button' onClick={() => history.push('/')}>Back</Button>
					</Col>
					<Col md={{ size: '6', offset: '1' }}>
						<p>Here's your personalized type group workout!</p>
					</Col>
				</Row>
				<WorkoutResult />
			</Container>
		</div>
	);
}

export default Workout;
