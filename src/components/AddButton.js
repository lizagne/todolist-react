import React from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const AddButton = () => (

	<div>
		<Row>
			<Col xs={10}></Col>
			<Col xs={2}>
				<Button bsStyle="danger" bsSize="large">
					<FontAwesome name='plus' />
				</Button>
			</Col>
		</Row>
	</div>

);

export default AddButton;