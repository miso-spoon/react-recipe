import React, { Component } from 'react';
import './Recipes.css';

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
                <a class="navbar-brand">
                    <img src="/logo.jpg" height="50" width="60" /> MomoBooks
                </a>
                    <input class="form-control mr-sm-2" value={this.state.key} onChange={this.handleFilter} name="key" type="filter" placeholder="Filter by Keyword" aria-label="Search" />          
            </nav>
        )
    }
}
export default Header;