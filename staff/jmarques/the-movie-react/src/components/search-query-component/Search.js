import React, { Component } from "react";
import axios from "axios";
import HeaderComponent from "../header-component/HeaderComponent";
import ListResults from "../result-component/ListResults";
import { getSearchResults } from "../../services/api"


const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`;

class Search extends Component {
    state = {
        movies: []
    };
    componentDidMount() {
        const {
            match: {
                params: { query },
            },
        } = this.props;

        getSearchResults(query).then(movie => {
            this.setState({ movie });
        });
    }

    render() {
        const { movies: results } = this.state;
        return (
            <div>
                <HeaderComponent />
                <ListResults results={results} />
            </div>
        );
    }
}

export default Search;
