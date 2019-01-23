import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';

class Recipes extends Component{
    state = {
        recipes: [],
        title: '',
        cookTime: ''
    };
    componentDidMount() {
		this.loadRecipes();
    }
    loadRecipes = () => {
        API.getRecipes()
                .then(res => this.setState({ recipes: res.data, title: '', cookTime: ''}))
                .catch(err => console.log(err));
    };
    handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveRecipe({
            title: this.state.title,
            cookTime: this.state.cookTime
            })
            .then(res => this.loadRecipes())
            .catch(err => console.log(err));
    };
    render() {
        return (
        <form>
            <Input 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)" 
                />
            <Input
                    value={this.state.cookTime}
                    onChange={this.handleInputChange}
                    name="cookTime"
                    placeholder="Cook Time (required)"
                />
            <FormBtn
                    //disabled={!(this.state.cookTime && this.state.title)}
                    onClick={this.handleFormSubmit}
                    >
                    Submit Recipe
            </FormBtn>
        </form>
        );
    }

}
export default Recipes;