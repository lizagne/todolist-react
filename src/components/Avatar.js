import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

const Avatar = () => (

	<div>
		<Row>
			<Col xs={10}></Col>
			<Col xs={2}>
				<Image src="https://avatars3.githubusercontent.com/u/26763021?s=460&v=4" thumbnail circle />
			</Col>
		</Row>
	</div>

);

export default Avatar;

