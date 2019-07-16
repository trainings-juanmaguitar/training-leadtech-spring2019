import React, { Component } from "react";

class SearchForm extends Component {
    state = {
        query: ''
    }

    handleChange = e => {
        const { value: query } = e.target
        this.setState({ query })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { query } = this.state
        const { onSubmitForm } = this.props
        onSubmitForm(query)
    }

    render() {
        const { query } = this.state
        const { handleChange, handleSubmit, handleKeyUp } = this

        return (
            <div className="container">
                <h3>Search Movie</h3>
                <form onSubmit={handleSubmit}>
                    <input className="form-control" value={query} onChange={handleChange} />
                    <button className="btn btn-primary">Search Movie</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;
