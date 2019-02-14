import React, { Component } from 'react';
import axios from 'axios';
import './Thumbnail.css'

export class Thumbnail extends Component{
    state = {
        pic: this.props.pic,
        image: ''
    }
    
    componentDidMount(){
        this.loadPhotos().then(res => this.setState({
            image: res.data
        }))
    }
    loadPhotos = () => {
        return axios.get('api/uploads/' + this.state.pic)
    }
    render() {
        while(this.state.image == ''){
            return (
                <img class="loading" src="/319.gif" />
            )
        };
        return(
            <img class="thumbnail" src={`data:image/jpeg;base64,${this.state.image}`}/>
        )
    }

}
export default Thumbnail;