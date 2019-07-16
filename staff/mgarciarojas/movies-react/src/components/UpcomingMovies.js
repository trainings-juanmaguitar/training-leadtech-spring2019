import React, { Component } from "react";

import ListResults from "./ListResults/";

import { getUpcomingMovies } from "../services/api";


class UpcomingMovies extends Component {

  state = {
    upcomingMovies: []
  }

  componentDidMount() {
    getUpcomingMovies()
      .then(results => {
        this.setState({upcomingMovies: results})
      })

  }

  render() {
    const {upcomingMovies} = this.state
    return (
      <div>
        <h1>Upcoming Movies</h1>
        <ListResults results={upcomingMovies} />
      </div>
    );
  }
}

export default UpcomingMovies;
