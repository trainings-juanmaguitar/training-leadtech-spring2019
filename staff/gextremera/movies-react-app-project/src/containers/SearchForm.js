import React, { Component } from "react";
import {FormControl, Button} from 'react-bootstrap';

class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = e => {
    const { value: query } = e.target;
    this.setState({ query });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmitForm } = this.props;
    onSubmitForm(query);
  };

  render() {
    const { query } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>        
        <form onSubmit={handleSubmit}>
          <input className="search-box-imput" value={query} onChange={handleChange} type="text" placeholder="Type Movie"/>
          <button className="search-box-button">Search Movie</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;