import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

const RoutineSection = (props) => {
	return (
		<div>
			<div className='row'>
				<div className='col-sm-12'>
					<h5 style={{ fontSize: '36px'}}>{props.title}</h5>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-10'>
					<ul className='list-item' style={{ marginLeft: '1em' }}>
						{props.bullets.map(bullet => (
							<li><p>{bullet}</p></li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RoutineSection;
