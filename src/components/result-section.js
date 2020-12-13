import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

function ResultSection(props) {
	return (
		<div>
			<Row>
				<Col>
					<h5 style={{ fontSize: '36px' }}>{props.title}</h5>
				</Col>
			</Row>
			<Row>
				<ul className='list-item' style={{ marginLeft: '1em' }}>
					<li>{props.item1}</li>
					<li>{props.item2}</li>
					<li>{props.item3}</li>
					<li>{props.item4}</li>
				</ul>
			</Row>
		</div>
	);
}

export default ResultSection;
