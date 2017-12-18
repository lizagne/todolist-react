//This is the parent of Task.js and the child of App.js
import React from 'react';
import Task from './Task';

const TaskList = () => (

	<div>
    	<Task />
		<Task />
		<Task />
		<Task />
		<Task />
	</div>
);

export default TaskList;