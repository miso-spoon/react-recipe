import React, { Component } from 'react';
import './RecipeCard.css';
import {Details} from './Details'

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
                            <div class="col-md-12">
                                <div class="row">
                                    <span class="card-title"><i class="fas fa-clock"></i>{this.state.recipe.cookTime}</span>
                                </div>
                                <div class="row">
                                    <span class="card-title"><i class="fa fa-exclamation-triangle"></i>{this.state.recipe.difficulty}</span>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="row">
                                    <span class="card-title"><i class="fas fa-pen"></i>Edit</span>
                                </div>
                                <div class="row">
                                    <span class="card-title"><i class="fas fa-times"></i>Delete</span>
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