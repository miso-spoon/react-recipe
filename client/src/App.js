import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './pages/Recipes';
import NewRecipe from './pages/NewRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeCard from './pages/RecipeCard';
import Details from './pages/Details';
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
				<Route exact path="/edit/:id" component={EditRecipe} />
			</Switch>
		</div>
	</Router>
);

export default App;
