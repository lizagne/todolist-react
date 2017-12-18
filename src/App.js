import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import DateComp from './components/DateComp';
import Avatar from './components/Avatar';
import AddButton from './components/AddButton';

const App = () => (
  	<div style={{ padding: '30px 30px' }}>
  		<Avatar />
    	<DateComp />
    	<br />
    	<TaskList />
    	<br />
		<AddButton />
    </div>	
)

export default App;
