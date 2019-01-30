import React, { Component } from 'react';
import './Ingredients.css';

export class Ingredients extends Component{
    state = {
        i: this.props.i,
        left: [],
        right: []
    }
    componentWillMount (){
        this.setState({
            left: this.state.i.slice(0, this.state.i.length/2),
            right: this.state.i.slice(this.state.i.length/2, this.state.i.length)
        })
    }
    render() {
        return(
        <div class ="row">
            <div class="ingredients">
                <ul class="icon">  
                    {this.state.right.map(i => (
                        <li class="li-s">{i}</li>
                    ))}
                </ul>
            </div> 
            <div class="ingredients">
                <ul class="icon">
                {this.state.left.map(i => (
                        <li class="li-s">{i}</li>
                    ))}
                </ul>   
            </div> 
        </div>
        )
    }

}

export default Ingredients