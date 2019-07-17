import React, { Component } from "react";

import ListResults from "./ListResults/";

import { getNowPlayingMovies } from "../services/api";


class NowPlayingMovies extends Component {

  state = {
    nowPlayingMovies: []
  }

  componentDidMount() {
    getNowPlayingMovies()
      .then(results => {
        this.setState({nowPlayingMovies: results})
      })

  }

  render() {
    const {nowPlayingMovies} = this.state
    return (
      <div>
        <h1>Now playing movies</h1>
        <ListResults results={nowPlayingMovies} />
      </div>
    );
  }
}

export default NowPlayingMovies;
