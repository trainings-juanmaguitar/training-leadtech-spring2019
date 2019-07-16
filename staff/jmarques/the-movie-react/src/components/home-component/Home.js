import React, { Component } from "react";
import axios from "axios";
import HeaderComponent from "../header-component/HeaderComponent";
import SearchForm from "../search-component/SearchForm";
import ListResults from "../result-component/ListResults";

const API_KEY = "b6555eeb71b473d4fb2936c807e98ece";
const getUrlApiSearch = query =>
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`;

class Home extends Component {
    state = {
        movies: []
    };
    // TODO Cambiar a fichero externo
    handleSearch = query => {
        const url = getUrlApiSearch(query);
        axios
            .get(url)
            .then(({ data: { results } }) => results)
            .then(results =>
                results.map(({ overview, title, poster_path }) => ({
                    overview,
                    title,
                    urlImage: getUrlImage(poster_path),
                }))
            )
            .then(movies => {
                this.setState({ movies });
            });
    };

    render() {
        const { movies: results } = this.state;
        const { handleSearch } = this;
        return (
            <div>
                <HeaderComponent />
                <div className="col-md-12 main-container">
                    <SearchForm onSubmitForm={handleSearch} />
                </div>
                <ListResults results={results} />
            </div>
        );
    }
}

export default Home;
