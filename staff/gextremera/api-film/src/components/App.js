import React, {Component} from "react";
//import FilmList from './FilmList'
import axios from 'axios'
import SearchForm from './SearchForm'
import ListResults from "./ListResults"
import PopularMovies from "./PopularMovies"


const API_KEY = 'e8202ecf51f9725243a72b1822989b46';
const getUrlApiSearch = query => ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
const getUrlApiPopular = () => ` https://api.themoviedb.org/3/movie/popular/movie?api_key=${API_KEY}`;
const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`;



class App extends Component {
    state = {
        movies: []
    }

    handleSearch = query =>  {
        const url = getUrlApiSearch(query) 
        axios
            .get(url)
            //.then(({data}) => data.results) esto es igual a:
            .then(({data : {results}}) => results)
            .then(results => results.map(({title, poster_path, id, overview}) => ({
                    title, 
                    urlImage: getUrlImage(poster_path),
                    id,
                    overview,
                }))
            )
            .then(movies => {
                this.setState({movies})
            })
    }

    render () {
        const {movies: results} = this.state
        const {handleSearch} = this
        return (
            <div>
                <h1>Listado de películas</h1>
                <p>Añade la palabra clave que quieres que contenga tu película.</p>
                <SearchForm onSubmitForm = {handleSearch}/>
                <ListResults  results={results} />            
            </div>
        )
    }    
}
    

export default App