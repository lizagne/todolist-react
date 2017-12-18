import React from 'react';
import Moment from 'moment';


const DateComp = () => (

	<div>
        <h1>{ Moment().format('dddd') }</h1>
		<p>{ Moment().format('LL') }</p>
	</div>

);

export default DateComp;