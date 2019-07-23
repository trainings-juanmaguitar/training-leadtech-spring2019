import React, { Component } from "react";
import ListResults from "../components/ListResults";
import { getUpComingMovies } from "../services/api";

class UpComingMovies extends Component {

  state = {
    upcomingMovies: []
  }

  componentDidMount() {
    console.log(this.props)
    getUpComingMovies()
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

export default UpComingMovies;
