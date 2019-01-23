import API from '../utils/API';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormBtn } from '../components/Form/FormBtn.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
                // .then(res => console.log(res.data))
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
    deleteRecipe = (id) => {
        API.deleteRecipe(id);
    }
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Recipe Name:</TableCell>
                            <TableCell align="right">Cook Time</TableCell>
                            <TableCell align="right">Difficulty</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.recipes.map(recipe => (
                            <TableRow key={recipe._id}>
                                <TableCell scope="row">{recipe.title}</TableCell>
                                <TableCell align="right">{recipe.cookTime}</TableCell>
                                <TableCell align="right">{recipe.difficulty}</TableCell>
                                <TableCell align="right">Rating: 5.6</TableCell>
                                <TableCell align="right">
                                    Delete Button Here
                                    </TableCell>
                            </TableRow>
                            ))}
                    </TableBody> 
                </Table>
                <button
                    //disabled={!(this.state.cookTime && this.state.title)}
                    onClick={this.handleCreate}
                    >
                    Create New
                </button>
            </Paper>
            
        );
    }

}
export default Recipes;