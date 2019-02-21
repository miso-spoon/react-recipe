import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Recipes.css';


function NoGroceries () {
    return(<p>No groceries here... Add some and come back later ^^</p>);
    
}
function ShowGroceries (props) {
    return(<ul class="cart">
            {props.cart.map((ing) => (
            <li >{ing}</li>
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
        return(
            <div class="cart">
                <nav class="navbar navbar-light recipe-header">
                    <a class="navbar-brand"> MomoBooks           
                    </a>
                    <Link to={{ pathname: '/'}} class="nav-item nav-link">Home <i class="fas fa-arrow-right"></i></Link>
                    {/* <a class="nav-item nav-link" href="/">Home <i class="fas fa-arrow-right"></i></a> */}
                </nav>
                <div class="app-container">
                    <div class="cart-container">
                    <h3 class="cart">Grocery List:</h3>
                    <hr></hr>
                        {this.state.cart.length == 0 ? <NoGroceries /> : <ShowGroceries cart={this.state.cart} />}
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;