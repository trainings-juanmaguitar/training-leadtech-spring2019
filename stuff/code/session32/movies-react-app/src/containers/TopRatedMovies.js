import React, { Component } from "react";

import ListResults from "../components/ListResults/";

import { getTopRatedMovies } from "../services/api";

let counter = 0

class TopRatedMovies extends Component {

  state = {
    topRatedMovies: []
  }

  componentDidMount() {
    getTopRatedMovies()
      .then(results => {
        this.setState({topRatedMovies: results})
      })

  }

  render() {
    console.log(`rendered ${++counter} times`)
    const {topRatedMovies} = this.state
    return (
      <div>
        <h1>Top Rated Movies</h1>
        <ListResults results={topRatedMovies} />
      </div>
    );
  }
}

export default TopRatedMovies;
