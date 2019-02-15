import React, { Component } from 'react';
import './Recipes.css';
import {Link} from 'react-router-dom';

export class Header extends Component{
    state = {
        key: ''
    }

    handleFilter = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
        this.props.parentMethod(value)
    }
    sendCart = () => {
        console.log(this.props.displayCart())
    }
    render() {
        return(
            <nav class="navbar navbar-light recipe-header">
                <a class="navbar-brand"> MomoBooks
                    {/* <img src="/logo.jpg" height="50" width="60" /> */}
                             
                </a>
                <div class="row">
                <a class="nav-item nav-link" href="/">Home</a>
                <Link to={{ pathname: '/cart', state: { cart: this.props.displayCart() } }}>View Cart</Link>
                <a class="nav-item nav-link" onClick={() => {this.props.clearCart()}}>Clear Cart</a>
                </div>
                <input class="form-control mr-sm-2" value={this.state.key} onChange={this.handleFilter} name="key" type="filter" placeholder="Filter by Keyword" aria-label="Search" />
            </nav>
        )
    }
}
export default Header;