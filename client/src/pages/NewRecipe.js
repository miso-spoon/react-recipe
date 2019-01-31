import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';
import './NewRecipe.css';

class NewRecipe extends Component{
    state = {
        recipes: [],
        title: '',
        cookTime: '',
        difficulty: '',
        servings: '',
        ingredientList: '',
        instructions: '',
        file: null,
        // img: null
    };
    fileSelectedHandler = event => {
        var x = URL.createObjectURL(event.target.files[0]);
        // x = x.slice(5, x.length);
        this.setState({
            // fileSelected: event.target.files[0],
            file: x
        })
    }
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
            difficulty: this.state.difficulty,
            servings: this.state.servings,
            ingredientList: this.state.ingredientList.split(','),
            instructions: this.state.instructions.split('\n'),
            imgUrl: this.state.file
            })
            .then(res => this.loadRecipes())
            .catch(err => console.log(err));
        this.props.history.push('/');
    };
    render() {
        return (
                <div class="form-container">
                    <h4>New Recipe:</h4>
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
                        <Input
                                value={this.state.servings}
                                onChange={this.handleInputChange}
                                name="servings"
                                placeholder="Servings"
                        />
                        <textarea class="ing-text" value={this.state.ingredientList} onChange={this.handleInputChange} name="ingredientList" placeholder="Ingredients (Separate each with a comma)"/>
                        <textarea class="ins-text" value={this.state.instructions} onChange={this.handleInputChange} name="instructions" placeholder="Instructions (Separate each with a new line!)"/>
                        <div>
                            <img src={this.state.file} width="30%" />
                            <input type="file" onChange={this.fileSelectedHandler} />
                        </div>
                        <button type="button" class="btn btn-danger" value="Upload" onClick={() => {this.props.history.push('/')}}><i class="fas fa-arrow-left"></i></button>
                        <FormBtn
                                //disabled={!(this.state.cookTime && this.state.title)}
                                onClick={this.handleFormSubmit}
                                >
                                Submit Recipe
                        </FormBtn>
                    </form>
                 </div>
        );
    }

}
export default NewRecipe;