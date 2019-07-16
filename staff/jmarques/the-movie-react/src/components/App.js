import React, { Component } from "react";
import axios from "axios";

import HeaderComponent from "./header-component/HeaderComponent";

import SearchForm from "./search-component/SearchForm";
import ListResults from "./result-component/ListResults";
import { directive } from "@babel/types";

const API_KEY = "b6555eeb71b473d4fb2936c807e98ece";
const getUrlApiSearch = query =>
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`;

// const imageBg = `https://api.themoviedb.org/3/movie/550/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`
// const imageBg = () => `https://api.themoviedb.org/3/movie/550/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`

class App extends Component {
    state = {
        movies: [],
        imageBg: []
    };

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


    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/550/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`)
            .then(({ data: { backdrops } }) => backdrops)
            .then(function (backdrops) {
                // handle success
                console.log('Success');
                
                backdrops.map(({ file_path }) => ({
                    file_path
                }))
            })
            .then(imageBg => {
                this.setState({ imageBg });
                console.log('this imageBg', this.setState.imageBg);
            });
    };

    // componentDidMount() {
    //     axios.get(`https://api.themoviedb.org/3/movie/550/images?api_key=${API_KEY}&language=en-US&include_image_language=en,null`)
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data.backdrops);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .finally(function () {
    //             // always executed
    //         });
    // };

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

export default App;
