import React, { Component } from 'react';
// import defaultThumb from '../../public/img/default-recipe-big.png'
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic
    }


    render() {
        if (this.state.pic === null || this.state.pic === "null"){
            return(<img class="thumbnail" src={process.env.PUBLIC_URL + "/img/default-recipe-big.png"} />)
        }
        return(
            <img class="thumbnail" src={process.env.PUBLIC_URL + "/img/" + this.state.pic} />
        )
    }

}
export default Thumbnail;