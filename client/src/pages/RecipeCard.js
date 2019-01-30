import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './RecipeCard.css';
import {Details} from './Details';
import API from '../utils/API';

export class RecipeCard extends Component{
    state = {
            recipe: this.props.recipe
    }

    render() {
        var c1 = "collapse" + this.state.recipe._id;
        var c2 = "#collapse" + this.state.recipe._id;
        return (
            <div class="accordion" id="accordionExample">
            <div class="card">
                <div>
                    <div class="card-header" id="headingOne">
                        <div class="row">
                            <h4 class="mb-0">
                                <button class="btn btn-link collapsed title" type="button" data-toggle="collapse" data-target={c2} aria-expanded="false" aria-controls={c1}>
                                    {this.state.recipe.title}
                                </button>
                            </h4>
                            <div class="desc">
                                    <span class="card-title"><i class="fas fa-clock"></i>{this.state.recipe.cookTime}</span>
                                    <span class="card-title"><i class="fa fa-exclamation-triangle"></i>{this.state.recipe.difficulty}</span>
                            </div>

                            <div class="button-column">
                                <div class="button-row">
                                    <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => {API.deleteRecipe(this.state.recipe._id)}}><i class="fas fa-times"></i></button>
                                    <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pen"></i></button>
                                </div>

                            </div>
                        </div>
                    </div>
                        <div id={c1} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <Details recipe={this.state.recipe}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}


export default RecipeCard;