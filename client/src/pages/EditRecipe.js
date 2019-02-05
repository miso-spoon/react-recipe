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
        servings: '',
        ingredientList: '',
        instructions: '',
        file: null,
        selectedFile: null
    };
    componentWillMount() {
        // var id = window.location.href.slice(window.location.href.length-24, window.location.href.length);
        // API.getRecipe(id).then(res => this.setState({ 
        //     id: id,
        //     recipe: res.data,
        //     title: res.data.title,
        //     cookTime: res.data.cookTime,
        //     difficulty: res.data.difficulty,
        //     servings: res.data.servings,
        //     ingredientList: res.data.ingredientList.join(','),
        //     instructions: res.data.instructions.join('\n'),
        //     file: res.data.imgUrl,
        //     selectedFile: res.data.img}))
        this.setState({ 
            recipe: this.props.recipe,
            id: this.props.recipe._id,
            title: this.props.recipe.title,
            cookTime: this.props.recipe.cookTime,
            difficulty: this.props.recipe.difficulty,
            servings: this.props.recipe.servings,
            ingredientList: this.props.recipe.ingredientList.join(','),
            instructions: this.props.recipe.instructions.join('\n'),
            file: this.props.recipe.imgUrl,
            selectedFile: this.props.recipe.img})

    };
    fileSelectedHandler = event => {
        var x = URL.createObjectURL(event.target.files[0]);
        console.log(typeof event.target.files[0])
        console.log(event.target.files[0])
        this.setState({
            file: x,
            selectedFile: event.target.files[0]
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
        API.updateRecipe(this.state.id, {
            title: this.state.title,
            cookTime: this.state.cookTime,
            difficulty: this.state.difficulty,
            servings: this.state.servings,
            ingredientList: this.state.ingredientList.split(','),
            instructions: this.state.instructions.split('\n'),
            imgUrl: this.state.file,
            img: this.state.selectedFile
            })
            .catch(err => console.log(err));
        this.props.parentMethod();
        window.location.reload();
    };
    render() {
        
        return (
        <div class="form-container">
            <h4 class="form-title">Edit Recipe:</h4>
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
                    <img src={this.state.file} width="30%"/>
                    <input type="file" onChange={this.fileSelectedHandler} />   
                </div>
                <hr></hr>
                <button class="btn btn-primary save"
                    disabled={!(this.state.title)}
                    onClick={this.handleFormSubmit}
                    >
                    Save changes
                </button>
            </form>
        </div>
        );
    }

}
export default EditRecipe;