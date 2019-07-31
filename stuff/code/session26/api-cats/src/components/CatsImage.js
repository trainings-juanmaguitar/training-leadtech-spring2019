import React, {Component} from "react";
import axios from 'axios'

import { getDataFromResponse, getImageFromData } from '../helpers/';

const API_KEY = 'b7cbc829-bc19-4980-a5f3-589dcf4bf752';
const URL_IMAGE = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

const stylesImage = {
    border: '1px solid red',
    height: '300px',
    width: '100%',
    display: 'block',
    marginTop : '20px',
    backgroundImage: 'url(https://cdn2.thecatapi.com/images/cp3.jpg)',
    backgroundSize: 'cover'
}

class CatsImage extends Component {

    state = {
        urlImage: ''
    }

    handleClick = e => {
        axios
            .get(URL_IMAGE)
            .then(getDataFromResponse)
            .then(getImageFromData)
            .then((urlImage) =>  {
                this.setState({ urlImage })
            });
    }

    render() {
        const {urlImage} = this.state
        const {handleClick} = this
        const style = {
            ...stylesImage,
            backgroundImage: `url(${urlImage})`
        }
        console.log(style)
        return (
            <div>
                <h3>CatsImage</h3>
                <button onClick={handleClick}>Get Image!</button>
                <img style={ style } />
            </div>
        )
    }
}

export default CatsImage