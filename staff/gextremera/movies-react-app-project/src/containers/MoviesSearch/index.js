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
      <div>
        <div className="col-xs-12 search-box">
          <SearchForm onSubmitForm={handleSearch} />
        </div>
        <div className="col-xs-12 list-links">
          <div className="text-center">
            <ul>          
              <li><a href="/popular">Popular</a></li>
              <li><a href="/topRated">Top Rated</a></li>
              <li><a href="/now_playing">Now Playing</a></li>
              <li><a href="/upcoming">UpComing</a></li>
            </ul>
          </div>          
        </div>
      </div>
    );
  }
}

export default MoviesSearch;