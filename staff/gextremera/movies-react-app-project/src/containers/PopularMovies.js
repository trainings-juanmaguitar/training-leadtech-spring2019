import React, { Component } from "react";
import ListResults from "../components/ListResults/";
import { getPopularMovies } from "../services/api";

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
