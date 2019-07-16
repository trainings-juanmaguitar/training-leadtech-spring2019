import React, { Component } from "react";

import ListResults from "./ListResults/";

import { getPopularMovies } from "../services/api";

let counter = 0


class PopularMovies extends Component {

  state = {
    popularMovies: []
  }

  componentDidMount() {
    console.log(this.props)
    getPopularMovies()
      .then(results => {
        this.setState({popularMovies: results})
      })

  }

  render() {
    console.log(`rendered ${++counter} times`)
    const {popularMovies} = this.state
    return (
      <div>
        <h1>Popular Movies</h1>
        <ListResults results={popularMovies} />
      </div>
    );
  }
}

export default PopularMovies;
