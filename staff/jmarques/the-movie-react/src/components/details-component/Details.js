import React, { Component } from "react";
import { getMovieDetails } from "../../services/api";
import HeaderComponent from "../header-component/HeaderComponent";

class Details extends Component {
    state = {
        movie: {},
    };

    componentDidMount() {
        const {
            match: {
                params: { id },
            },
        } = this.props;

        getMovieDetails(id).then(movie => {
            this.setState({ movie });
        });
    }

    render() {

        const { title, overview, backdrop_path } = this.state.movie;
        return (
            <div>
                <HeaderComponent />

                <div className="jumbotron jumbotron-fluid">
                    <div className="container col-md-6">
                        <h1 className="display-4">{title}</h1>
                        <img width="100%" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
