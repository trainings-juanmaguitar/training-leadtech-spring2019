import React, { Component } from "react";
import ListResults from "../result-component/ListResults";
import HeaderComponent from "../header-component/HeaderComponent";
import { getPopularMovies } from "../../services/api";

class PopularMovies extends Component {

    state = {
        popularMovies: []
    }

    componentDidMount() {
        getPopularMovies()
            .then(results => {
                this.setState({ popularMovies: results })
            })

    }

    render() {
        const { popularMovies } = this.state
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <h1>Popular Movies</h1>
                    <ListResults results={popularMovies} />
                </div>
            </div>
        );
    }
}

export default PopularMovies;
