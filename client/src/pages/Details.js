import React, { Component } from 'react';
import { Ingredients } from './Ingredients';
import './Details.css';

export class Details extends Component{
    state = {
        recipe: this.props.recipe
    }
    componentDidMount(){
        console.log(this.state.recipe._id);
    }

    render() {
        return (
            <div class="detail-container">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="ingredients-title">
                            Ingredients:
                        </h4>
                            <Ingredients i={this.state.recipe.ingredientList} />
                    </div>
                    <div class="col-md-6">
                        <img class="foodpic" src={this.state.recipe.imgUrl} width="100%" />
                    </div>
                </div>
                <div class="instruction-container">
                    <hr></hr>
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