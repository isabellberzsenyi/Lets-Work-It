import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import ResultSection from './result-section';
import Set from './set';

function WorkoutResult() {
	return (
		<div>
			<Row>
				<Col md={{ size: '10', offset: '1' }}>
					<Form className='workout-result'>
						<Row>
							<ResultSection
								title='Warm-up'
								item1='sdfadfa Lorem ipsum dolor sit amet'
								item2='sdfadfa Lorem ipsum dolor sit amet'
								item3='sdfadfa Lorem ipsum dolor sit amet'
								item4='sdfadfa Lorem ipsum dolor sit amet'
							/>
						</Row>
						<Row>
							<Set
								setNum='3'
								exercise1='adfa Lorem ipsum dolor si'
								exercise2='adfa Lorem ipsum dolor si'
								exercise3='adfa Lorem ipsum dolor si'
								exercise4='adfa Lorem ipsum dolor si'
								reps1='3'
								reps2='4'
								reps3='5'
								reps4='3'
							/>
						</Row>
						<Row>
							<ResultSection
								title='Cool-down'
								item1='sdfadfa Lorem ipsum dolor sit amet'
								item2='sdfadfa Lorem ipsum dolor sit amet'
								item3='sdfadfa Lorem ipsum dolor sit amet'
								item4='sdfadfa Lorem ipsum dolor sit amet'
							/>
						</Row>
					</Form>
				</Col>
			</Row>
		</div>
	);
}
export default WorkoutResult;
