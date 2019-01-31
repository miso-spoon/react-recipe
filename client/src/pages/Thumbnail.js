import React, { Component } from 'react';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic
    }


    render() {
        if (this.state.pic === ''){
            return(<img class="thumbnail" src="../../public/img/default-recipe-big.png" width="50%"/>)
        }
        return(
            <img class="thumbnail" src={this.state.pic} width="50%"/>
        )
    }

}
export default Thumbnail;