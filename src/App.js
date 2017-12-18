import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import DateComp from './components/DateComp';
import Avatar from './components/Avatar'

const App = () => (
  	<div>
  		<Avatar />
    	<DateComp />
    	<br />
    	<TaskList />
    </div>	
)

export default App;
