import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import Tooltip from 'reactstrap/lib/Tooltip';

function Set(props) {
	const [toolTipOpen, setToolTipOpen] = useState(false);
	const toggle = () => setToolTipOpen(!toolTipOpen);

	const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	const getExerciseContent = (exercises, reps) => {
		let content = []
		for (let i = 0; i < exercises.length; i++) {
			if (props.workout_type === 'circuit') {
				content.push(
					<li><p>Exercise {i+1}: {capitalize(exercises[i])} ({reps[i]} reps)</p></li>
				);
			} else {
				content.push(
					<li><p>Exercise {i+1}: {capitalize(exercises[i])}</p></li>
				);
			}
		
		}
		return content;
	}
	return (
		<div>
			<div className='row'>
				<div className='col-sm-12'>
					<h5 style={{ fontSize: '36px'}}> {capitalize(props.workout_type)} Workout</h5>
				</div>
			</div>
			<div className='row'>
				{
					props.workout_type === 'circuit' && (
						<div className='col-sm-10'>
							<h4 className='set'>{props.setNum} Sets</h4>
						</div>
					)	
				}
			</div>
			<div className='row'>
				<div className='col-sm-10'>
					<ul className='list-item' style={{ marginLeft: '1em' }}>
						{ getExerciseContent(props.exercises, props.reps) }
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Set;
