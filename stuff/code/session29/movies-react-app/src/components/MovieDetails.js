import React, { Component } from "react";

import { getMovieDetails } from "../services/api";

let counter = 0

class MovieDetails extends Component {
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
    console.log(`rendered ${++counter} times`)
    console.log(this.state.movie)
    
    const { title, overview, release_date } = this.state.movie;
    const year = release_date && release_date.split("-")[0];
    return (
      <div>
        <div>
          <h1>
            {title} <small>{year}</small>
          </h1>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
