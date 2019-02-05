import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Route, Redirect } from 'react-router'
import './RecipeCard.css';
import {Details} from './Details';
import API from '../utils/API';
import {EditRecipe} from './EditRecipe';
import {Thumbnail} from './Thumbnail';

export class RecipeCard extends Component{
    state = {
            recipe: this.props.recipe,
    }
    handleDelete = () => {
        this.props.deleteMethod(this.state.recipe._id)
    }
    render() {
        var c1 = "collapse" + this.state.recipe._id;
        var c2 = "#collapse" + this.state.recipe._id;
        var e1 = "edit" + this.state.recipe._id;
        var e2 = "#edit" + this.state.recipe._id;
        return (
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div>
                    <div class="card-header" id="headingOne">
                        <div class="row">
                            <div class="desc">  
                                <Thumbnail pic={this.state.recipe.imgUrl} />
                            </div>    
                            <h4 class="mb-0">
                                <button class="btn btn-link collapsed title" type="button" data-toggle="collapse" data-target={c2} aria-expanded="false" aria-controls={c1}>
                                    {this.state.recipe.title}
                                </button>
                            </h4>
                            <div class="button-column">
                                <div class="button-row">
                                    <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => {this.handleDelete()}}><i class="far fa-times-circle"></i></button>
                                    <button type="button" class="btn btn-outline-primary collapsed btn-sm" data-toggle="collapse" data-target={e2} aria-expanded="false" aria-controls={e1}><i class="far fa-edit"></i></button>
                                </div>

                            </div> 
                        </div>
                    </div>
                        <div id={c1} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <Details recipe={this.state.recipe}/>
                            </div>
                        </div>
                        <div id={e1} class="collapse">
                            <div class="card-body">
                                <EditRecipe recipe={this.state.recipe} parentMethod={() => {this.props.parentMethod()}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeCard;