import React, { Component } from 'react';
import { Ingredients } from './Ingredients';
import './Details.css';

export class Details extends Component{
    state = {
        recipe: this.props.recipe
    }

    render() {
        return (
            <div class="detail-container">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="ingredients-title">
                            <span>
                                Ingredients:
                            </span>
                        </h4>
                        <div class="row">
                            <Ingredients i={this.state.recipe.ingredientList} />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img class="foodpic" src="http://placekitten.com/234/234" width="100%" />
                    </div>
                </div>
                <br></br>
                <div class="instruction-container">
                    <h3 class="instruction-title">Instructions:</h3>
                    <hr></hr>
                    <div class="instructions">
                        <ol>
                        {this.state.recipe.instructions.map(instruction => (
                            <div class="instruction">
                                <li>{instruction}</li>
                            </div>
                        ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;