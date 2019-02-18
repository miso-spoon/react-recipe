import React, { Component } from 'react';
import './Recipes.css';


function NoGroceries () {
    return(<p>No groceries here... Add some and come back later ^^</p>);
    
}
function ShowGroceries (props) {
    return(<ul>
            {props.cart.map((ing) => (
            <li>{ing}</li>
            ))}
          </ul>);
}

export class Cart extends Component{
    state = {
        cart: []
    }
    componentWillMount(){
        this.setState({
            cart: this.props.location.state.cart
        })
    }
    render() {
        // let groceries;
        // if (this.state.cart.length == 0) {
        //     groceries = <NoGroceries/>
        // } else {
        //     groceries = <ShowGroceries cart={this.state.cart}/>
        // }
        return(
            <div class="cart">
                <nav class="navbar navbar-light recipe-header">
                    <a class="navbar-brand"> MomoBooks           
                    </a>
                    <a class="nav-item nav-link" href="/">Home</a>
                </nav>
                <div class="app-container">
                    <h3>Grocery Cart:</h3>
                    {this.state.cart.length == 0 ? <NoGroceries /> : <ShowGroceries cart={this.state.cart} />}
                </div>
            </div>
        )
    }
}
export default Cart;