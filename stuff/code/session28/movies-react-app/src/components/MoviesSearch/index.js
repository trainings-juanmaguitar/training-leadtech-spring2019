import React, { Component } from "react";

import SearchForm from "../SearchForm";
import ListResults from "../ListResults/";

import { getSearchResults } from "../../services/api";

class MoviesSearch extends Component {
    state = {
      movies: [],
    };
  
    handleSearch = async query => {
      const movies = await getSearchResults(query)
      this.setState({ movies });  
    };
  
    render() {
      const { movies: results } = this.state;
      const { handleSearch } = this;
      return (
        <div className="container">
  
            <SearchForm onSubmitForm={handleSearch} />
            <ListResults results={results} />
          
        </div>
      );
    }
  }
  
  export default MoviesSearch;
  