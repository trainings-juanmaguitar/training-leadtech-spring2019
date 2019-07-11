import React, {Component} from "react";
import axios from 'axios'

const API_KEY = 'e8202ecf51f9725243a72b1822989b46';
const URL_FILM = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
//let result = ``;

class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            inputValue: ''
        }
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    getMovies = () => {
        const {movies} = this.state;
        return movies.map(movie => <li key={movie.id}>{movie.title}</li>);
    }
    
    handleClick = e => {
        const {inputValue} = this.state;
        axios
        .get(`${URL_FILM}${inputValue}`)
        .then(({ data }) => data.results )
        // .then((result) => result.map(e =>`<li>${e.title}</li>`)) así muestro el resultado de title
        .then((result) => {            
            this.setState({
                movies: result
            })
        });
    }
    
    
    
    render() {
        const {handleClick} = this
        const {inputValue} = this.state;
        return (
            <div>
            <input type="text" value={inputValue} onChange={this.handleChange}/>
            <button onClick={handleClick}>Obtén tus películas</button>
            <ul>
            {this.getMovies()}
            </ul>
            </div>
            )
        }
    }
    
    export default FilmList