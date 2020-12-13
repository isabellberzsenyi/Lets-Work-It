import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Tooltip from 'reactstrap/lib/Tooltip';

function Set(props) {
	const [toolTipOpen, setToolTipOpen] = useState(false);
	const toggle = () => setToolTipOpen(!toolTipOpen);
	return (
		<div>
			<Row>
				<Col>
					<h5 style={{ fontSize: '36px' }}>Work out</h5>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4 className='set' id='set'>
						{props.setNum} Sets
					</h4>
					<Tooltip
						placement='right'
						isOpen={toolTipOpen}
						target='set'
						toggle={toggle}>
						Hi
					</Tooltip>
				</Col>
			</Row>
			<Row>
				<ul style={{ marginLeft: '1em', listStyleType: 'square' }}>
					<li>
						Exercise 1: {props.exercise1} ({props.reps1} reps)
					</li>
					<li>
						Exercise 2: {props.exercise2} ({props.reps2} reps)
					</li>
					<li>
						Exercise 3: {props.exercise3} ({props.reps3} reps)
					</li>
					<li>
						Exercise 4: {props.exercise4} ({props.reps4} reps)
					</li>
				</ul>
			</Row>
		</div>
	);
}
export default Set;
