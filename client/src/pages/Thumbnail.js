import React, { Component } from 'react';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic
    }
    
    render() {
        console.log(process.env.PUBLIC_URL + "/uploads/" + this.state.pic);
        return(
            <img class="thumbnail" src={process.env.PUBLIC_URL + "/uploads/" + this.state.pic}/>
        )
    }

}
export default Thumbnail;