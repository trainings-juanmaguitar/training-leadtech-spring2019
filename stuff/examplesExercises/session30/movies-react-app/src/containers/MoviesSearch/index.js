import React, { Component } from "react";

import SearchForm from "../SearchForm";

class MoviesSearch extends Component {
    
  
    handleSearch = async query => {
      const {history} = this.props
      history.push(`/search/${query}`)
    };
  
    render() {
      const { handleSearch } = this
      return (
        <div className="container">
            <SearchForm onSubmitForm={handleSearch} />
        </div>
      );
    }
  }
  
  export default MoviesSearch;
  