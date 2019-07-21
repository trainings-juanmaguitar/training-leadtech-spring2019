import React, { Component } from "react";
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
      <div className="form-inline">        
        <form onSubmit={handleSubmit}>
          <FormControl value={query} onChange={handleChange} type="text" placeholder="Search Movie" className="mr-sm-2" size="sm"/>
          <Button variant="outline-info" size="sm">Search</Button>
        </form>
      </div>
    );
  }
}

export default SearchForm;