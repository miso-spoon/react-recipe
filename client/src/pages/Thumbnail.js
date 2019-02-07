import React, { Component } from 'react';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic
    }
    
    render() {
        
        if (this.state.pic === null || this.state.pic === "null"){
            return(<img class="thumbnail" src={process.env.PUBLIC_URL + "default-recipe-big.png"} />)
        }
        var d1 = process.env.PUBLIC_URL + this.state.pic;
        return(
            <img class="thumbnail" src={d1} />
        )
    }

}
export default Thumbnail;