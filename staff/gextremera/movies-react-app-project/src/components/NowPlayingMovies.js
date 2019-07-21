import React, { Component } from "react";

import ListResults from "./ListResults/";

import { getNowPlayingMovies } from "../services/api";



class NowPlayingMovies extends Component {

  state = {
    nowPlayingMovies: []
  }

  componentDidMount() {
    console.log(this.props)
    getNowPlayingMovies()
      .then(results => {
        this.setState({nowPlayingMovies: results})
      })

  }

  render() {
    
    const {nowPlayingMovies} = this.state
    return (
      <div>
        <h1>Now Playing Movies</h1>
        <ListResults results={nowPlayingMovies} />
      </div>
    );
  }
}

export default NowPlayingMovies;
