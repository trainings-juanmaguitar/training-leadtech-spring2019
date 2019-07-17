import React, { Component } from "react";

import { Redirect } from 'react-router-dom'

class SearchForm extends Component {
    state = {
        query: '',
        fireRedirect: false
    }

    handleChange = e => {
        const { value: query } = e.target
        this.setState({ query })
    }

    handleSubmit = e => {
        e.preventDefault()

        // this.props.history.push(`/search/${this.state.query}`);

        this.setState({ fireRedirect: true })

        const { query } = this.state
        const { onSubmitForm } = this.props
        // onSubmitForm(query)
    }

    render() {
        const { fireRedirect, query } = this.state
        const { handleChange, handleSubmit } = this

        return (
            <div className="container">
                <h3>Search Movie</h3>
                <form onSubmit={handleSubmit}>
                    <input className="form-control" value={query} onChange={handleChange} />
                    <button className="btn btn-primary">Search Movie</button>
                </form>
                {
                    fireRedirect && query &&
                    <Redirect to={`/search/${query}`} push />
                }
            </div>
        );
    }
}

export default SearchForm;
