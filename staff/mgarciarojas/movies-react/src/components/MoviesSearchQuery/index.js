import React, { Component } from "react";

import SearchForm from "../SearchForm";
import ListResults from "../ListResults";

import { getSearchResults } from "../../services/api";

class MoviesSearchQuery extends Component {
    state = {
      movies: [],
      query: ""
    };
  
    handleSearch = async query => {
      const movies = await getSearchResults(query)
      this.setState({ movies });  
    };
  
    componentDidMount() {
      const {
        match: {
          params: { query },
        },
      } = this.props;
  
     
    }
  
    render() {
      const { movies: results, query } = this.state;
      const { handleSearch } = this;
      return (
        <div className="container">
  
            <SearchForm onSubmitForm={handleSearch} />
            <h1>Resultados para {query}</h1>
            <ListResults results={results} />          
        </div>
      );
    }
  }
  
  export default MoviesSearchQuery;
  