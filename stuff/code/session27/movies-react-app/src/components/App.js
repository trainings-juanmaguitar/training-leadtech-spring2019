import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import ListResults from "./ListResults";

const API_KEY = "ba09f3c8c6c830377b422df18cfa833e";
const getUrlApiSearch = query =>
  `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`

class App extends Component {
  state = {
    movies: [],
  };

  handleSearch = query => {
    const url = getUrlApiSearch(query);
    axios
      .get(url)
      .then(({ data: { results } }) => results)
      .then(results =>
        results.map(({ title, poster_path }) => ({
          title,
          urlImage: getUrlImage(poster_path),
        }))
      )
      .then(movies => {
        this.setState({ movies });
      });
  };

  render() {
    const { movies: results } = this.state;
    const { handleSearch } = this;
    return (
      <div>
        <SearchForm onSubmitForm={handleSearch} />
        <ListResults results={results} />
      </div>
    );
  }
}

export default App;
