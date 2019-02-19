import React, { Component } from 'react';
import { Ingredients } from './Ingredients';
import './Details.css';

export class Details extends Component{
    state = {
        recipe: this.props.recipe
    }
    componentDidMount(){
    }
    render() {
        return (
            <div class="detail-container">
                <div class="ing-row">
                    <div class="title-container">
                        <h4 class="ingredients-title">
                            Ingredients:
                        </h4>
                    </div>
                        <div class="detail-container">
                            <Ingredients i={this.state.recipe.ingredientList} />
                        </div>
                </div>
                <div class="attr-row">
                    <div class="row-title"><i class="fas fa-clock"></i>{this.state.recipe.cookTime}</div>
                    <div class="row-title"><i class="fa fa-exclamation-triangle"></i>{this.state.recipe.difficulty}</div>
                    <div class="row-title"><i class="fas fa-hamburger"></i>{this.state.recipe.servings}</div>
                </div>
                <hr></hr>
                <div class="instruction-container">
                    <div class="title-container">
                        <h3 class="instruction-title">Instructions:</h3>
                    </div>
                    <div class="instructions">
                        <ol class="in">
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