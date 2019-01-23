import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import NewRecipe from './pages/NewRecipe';
import './App.css';
import { Nav } from 'react-bootstrap';

const App = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Recipes} />
				<Route exact path="/recipe" component={Recipes} />
				<Route exact path="/add" component={NewRecipe} />
			</Switch>
		</div>
	</Router>
);

export default App;
