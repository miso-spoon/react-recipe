import React, { Component } from 'react';
import axios from 'axios';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic
    }
    
    render() {
        return(
            <img class="thumbnail" src={axios.get('api/uploads/' + this.state.pic)}/>
        )
    }

}
export default Thumbnail;