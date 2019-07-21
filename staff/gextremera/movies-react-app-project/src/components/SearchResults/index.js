import React, { Component } from "react";

import SearchForm from "../SearchForm";
import ListResults from "../ListResults/";

import { getSearchResults } from "../../services/api";

class SearchResults extends Component {
    state = {
      movies: [],
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
  
      this.handleSearch(query)
    }

    render() {
      const { movies: results } = this.state;
      const { handleSearch } = this;
      return (
        <div>          
          <ListResults results={results} />
        </div>
      );
    }
  }
  
  export default SearchResults;
  