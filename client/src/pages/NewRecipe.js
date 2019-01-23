import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';

class NewRecipe extends Component{
    state = {
        recipes: [],
        title: '',
        cookTime: '',
        difficulty: ''
    };
    componentDidMount() {
		this.loadRecipes();
    }
    loadRecipes = () => {
        API.getRecipes()
                .then(res => this.setState({ recipes: res.data, title: '', cookTime: '', difficulty: ''}))
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
            cookTime: this.state.cookTime,
            difficulty: this.state.difficulty
            })
            .then(res => this.loadRecipes())
            .catch(err => console.log(err));
        this.props.history.push('/');
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
            <Input
                    value={this.state.difficulty}
                    onChange={this.handleInputChange}
                    name="difficulty"
                    placeholder="Difficulty"
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
export default NewRecipe;