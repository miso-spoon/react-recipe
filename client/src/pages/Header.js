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
    render() {
        return(
            <nav class="navbar navbar-light recipe-header">
                <a class="navbar-brand"> MomoBooks
                </a>
                <Link to={{ pathname: '/cart', state: { cart: this.props.displayCart() } }} class="nav-item nav-link">View Cart <i class="fas fa-arrow-right"></i></Link>
                <input class="form-control mr-sm-2" value={this.state.key} onChange={this.handleFilter} name="key" type="filter" placeholder="Filter by Keyword" aria-label="Search" />
                

    
            </nav>
        )
    }
}
export default Header;