import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';
import './NewRecipe.css';

export class EditRecipe extends Component{
    state = {
        recipe: {},
        id: '',
        title: '',
        cookTime: '',
        difficulty: '',
        ingredientList: '',
        instructions: ''
    };
    componentWillMount() {
        var id = window.location.href.slice(window.location.href.length-24, window.location.href.length);
        API.getRecipe(id).then(res => this.setState({ 
            id: id,
            recipe: res.data,
            title: res.data.title,
            cookTime: res.data.cookTime,
            difficulty: res.data.difficulty,
            ingredientList: res.data.ingredientList.join(','),
            instructions: res.data.instructions.join('\n')}));

    };
    handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.updateRecipe(this.state.id, {
            title: this.state.title,
            cookTime: this.state.cookTime,
            difficulty: this.state.difficulty,
            ingredientList: this.state.ingredientList.split(','),
            instructions: this.state.instructions.split('\n')
            })
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
            <textarea class="ing-text" value={this.state.ingredientList} onChange={this.handleInputChange} name="ingredientList" placeholder="Ingredients (Separate each with a comma)"/>
            <textarea class="ins-text" value={this.state.instructions} onChange={this.handleInputChange} name="instructions" placeholder="Instructions (Separate each with a new line!)"/>
            <br></br>
            <button type="button" class="btn btn-danger" onClick={() => {this.props.history.push('/')}}><i class="fas fa-arrow-left"></i></button>
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
export default EditRecipe;