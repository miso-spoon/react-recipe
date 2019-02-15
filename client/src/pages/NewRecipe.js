import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';
import './NewRecipe.css';
import axios from 'axios';
import TextareaAutosize from 'react-autosize-textarea';

export class NewRecipe extends Component{
    state = {
        recipes: [],
        title: '',
        cookTime: '',
        difficulty: '',
        servings: '',
        ingredientList: '',
        instructions: '',
        file: null,
        fileSelected: null
    };
    fileSelectedHandler = event => {
        var x = URL.createObjectURL(event.target.files[0]);
        this.setState({
            fileSelected: event.target.files[0],
            file: x
        })
    }
    handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
    };
    handleUpload = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post('/api/uploads/', data).then((res) => {
            this.setState({
                fileSelected: res.data.path
            })
        })
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveRecipe({
            title: this.state.title,
            cookTime: this.state.cookTime,
            difficulty: this.state.difficulty,
            servings: this.state.servings,
            ingredientList: this.state.ingredientList.split(','),
            instructions: this.state.instructions.split('\n'),
            imgUrl: this.state.fileSelected,
            })
            .catch(err => console.log(err));
        this.props.parentMethod();
    };
    render() {
        return (
                <div class="form-container">
                    <h4 class="form-title">New Recipe:</h4>
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
                        <TextareaAutosize defaultValue={this.state.instructions} class="ins-text" onChange={this.handleInputChange} name="instructions" placeholder="Instructions (Separate each with a new line!)"/>
                        <div>
                            <img src={this.state.file} width="30%" />
                            <input type="file" onChange={this.fileSelectedHandler} />
                            <button class="btn-primary" type="button" onClick={this.handleUpload}>Upload</button>
                        </div>
                        <hr></hr>
                        <button class="btn btn-primary save"
                                disabled={!(this.state.title)}
                                onClick={this.handleFormSubmit}
                                >
                                Submit Recipe
                        </button>
                    </form>
                 </div>
        );
    }

}
export default NewRecipe;