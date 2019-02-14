import React, { Component } from 'react';
import axios from 'axios';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic,
        image: ''
    }
    
    componentDidMount(){
        if(this.state.pic)
        this.loadPhotos().then(res => this.setState({
            image: res.data
        }))
    }
    loadPhotos = () => {
        return axios.get('api/uploads/' + this.state.pic)
    }
    render() {
        if(this.state.pic == null){
            return (
                <img class="thumbnail" src="/default-recipe-big.png" />
            )
        }
        else{
            while(this.state.image == ''){
                return (
                    <img class="loading" src="/default-recipe-big.png" />
                )
            }
            return(
                <img class="thumbnail" src={`data:image/jpeg;base64,${this.state.image}`}/>
            )
        };
    }

}
export default Thumbnail;