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
import { Header } from './Header';



class Recipes extends Component{
    state = {
        recipes: [],
        filteredRecipes: [],
        cart: []
    };
    componentDidMount() {
        this.loadRecipes();
    }
    filterRecipes = (keyword) => {
        let filteredRecipes = this.state.recipes
        filteredRecipes = filteredRecipes.filter((recipe) => {
            let recipeName = recipe.title.toLowerCase()
            return recipeName.indexOf(keyword.toLowerCase()) !== -1
        })
        this.setState({
            filteredRecipes
        })
        console.log(filteredRecipes)
    }
    loadRecipes = () => { 
        API.getRecipes()
                .then(this.refreshList)
    };
    handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
    };
    refreshList = res => this.setState({recipes: res.data,
                                        filteredRecipes: res.data})
    deleteRecipe = (id) => {
        API.deleteRecipe(id);
        this.setState({
            recipes: this.state.recipes.filter(recipe => recipe._id !== id),
            filteredRecipes: this.state.filteredRecipes.filter(recipe => recipe._id !== id)
        })
        this.loadRecipes();
    }
    addToCart = (ingredients) => {
        let value = this.state.cart.concat(ingredients)
        this.setState({
            cart: value
        })
    }
    displayCart = () => {
        console.log("Cart displayed: " + this.state.cart)
        return (this.state.cart)
    }
    clearCart = () => {
        this.setState({
            cart: []
        })
    }
    render() {
        return (
            <div>
                <Header parentMethod={this.filterRecipes} displayCart={this.displayCart} clearCart={() => {this.clearCart()}}/>
                <div class="app-container">
                    <div class="card-container">
                        {this.state.filteredRecipes.map((recipe) => (<RecipeCard key={recipe._id} recipe={recipe} addToCart={(x) => {this.addToCart(x)}} parentMethod={() => {this.loadRecipes()}} deleteMethod={(id) => {this.deleteRecipe(id)}} />))}
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
                <div class="recipe-footer">
                    <div class="footer-info">
                        miso-spoon@github for the source code
                    </div>
                </div>
            </div>

            
        );
    }

}
export default Recipes;