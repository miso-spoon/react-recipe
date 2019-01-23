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

    handleCreate = () => {
        this.props.history.push('/add');
    };
    render() {
        return (
            <button
                    //disabled={!(this.state.cookTime && this.state.title)}
                    onClick={this.handleCreate}
                    >
                    Create New
            </button>
        );
    }

}
export default Recipes;