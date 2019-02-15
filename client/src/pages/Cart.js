import React, { Component } from 'react';
import './Recipes.css';


export class Cart extends Component{
    state = {
        cart: []
    }

    componentWillMount() {
        console.log("Cart state: " + this.props.location.state.cart)
        // var cart = this.props.location.state.cart
        // console.log(this.props.location.state.cart)
        this.setState({
            cart: this.props.location.state.cart
        })
    }

    render() {
        return(
            <div class="app-container">
                {this.state.cart}
            </div>
        )
    }
}
export default Cart;