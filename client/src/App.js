import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import './App.css';
import { Nav } from 'react-bootstrap';

const App = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Recipes} />
				<Route exact path="/recipes" component={Recipes} />
			</Switch>
		</div>
	</Router>
);

export default App;
