import React, { Component } from 'react';
import './Ingredients.css';

export class Ingredients extends Component{
    state = {
        i: this.props.i
    }
    render() {
        return(
        <div class ="row">
            <div class="ingredients">
                <ul class="icon">  
                    <li>
                        {this.state.i[0]}
                    </li>
                    <li>
                        {this.state.i[2]}
                    </li>
                </ul>
            </div> 
            <div class="ingredients">
                <ul class="icon">
                    <li>
                        {this.state.i[1]}
                    </li>
                    <li>
                        {this.state.i[3]}
                    </li>
                </ul>   
            </div> 
        </div>
        )
    }

}

export default Ingredients