import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router';
import { RecipeCard } from './RecipeCard';
import './Recipes.css';
import { NewRecipe } from './NewRecipe';



class Recipes extends Component{
    state = {
        recipes: []
    };
    componentDidMount() {
        this.loadRecipes();
    }
    loadRecipes = () => {
        API.getRecipes()
                // .then(res => console.log(res.data))
                .then(res => this.setState({ recipes: res.data}))
                .catch(err => console.log(err));
        console.log("Hit");

    };
    handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
    deleteRecipe = (id) => {
        API.deleteRecipe(id);
        this.setState({
            recipes: this.state.recipes.filter(recipe => recipe._id !== id)
        })
    }

    render() {
        return (
                <div class="app-container">
                    <div class="card-container">
                        {this.state.recipes.map(recipe => (<RecipeCard recipe={recipe} parentMethod={() => {this.loadRecipes()}} deleteMethod={(id) => {this.deleteRecipe(id)}} />))}
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <h4 class="mb-1">
                                <button class="btn btn-link collapsed title" type="button"  data-toggle="collapse" data-target="#add" aria-expanded="false" aria-controls="add">
                                    + Add New recipe
                                </button>
                            </h4>
                            <div id="add" class="collapse">
                                <div class="card-body">
                                    <NewRecipe parentMethod={() => {this.loadRecipes()}} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            
        );
    }

}
export default Recipes;