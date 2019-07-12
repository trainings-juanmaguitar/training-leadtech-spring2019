import React, {Component} from "react";
import axios from 'axios'

import { getDataFromResponse, getMovieFromData, getMovieNameFromData } from '../helpers';

const API_KEY = '9eee154f5cc6cba872fb2be0991c63cd';

  
class MovieSearch extends Component {

    state = {
        urlMovie: '',
    }

    handleClick = e => {
        let queryMovie=document.getElementById("inputField").value;
        const URL_MOVIE = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=indiana`;
        axios
            .get(URL_MOVIE)
            .then(getDataFromResponse)
            .then(getMovieFromData)
            .then(getMovieNameFromData)
            .then(console.log)
            
            //.then((urlMovie) =>  {
            //    this.setState(urlMovie);
            //});
    };

    render() {
        const {urlImage} = this.state
        const {handleClick} = this

        return (
            <form>
                <h3>MovieSearch</h3>
                <input id="inputField" type="text" name="Movie" placeholder="Insert the movie to search"></input>
                <button onClick={handleClick}>Search Movie!</button>
            </form>
        )
    }
}

export default MovieSearch