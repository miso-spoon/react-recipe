import React, { Component } from 'react';
import './Details.css';

export class Details extends Component{
    state = {
            recipe: this.props.recipe
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md">
                            <span class="card-title">{this.state.recipe.title}</span>
                        </div>
                        <div class="col-md">
                            <span class="card-title">{this.state.recipe.cookTime}</span>
                        </div>
                        <div class="col-md">
                            <span class="card-title">{this.state.recipe.difficulty}</span>
                        </div>
                        <div class="col-md">
                            <p>
                                <a href="">Edit</a>/<a href="">Delete</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}


export default Details;