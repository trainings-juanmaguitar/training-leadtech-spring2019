import React, {Component} from 'react';
import axios from 'axios'

const API_KEY = 'e8202ecf51f9725243a72b1822989b46';
const getSearchUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

class SearchForm extends Component {
    state = {
        query: ''
    }
    handleChange = e => {
        const {value: query} = e.target
        this.setState({ query })
    }
    handleSubmit = e => {
        e.preventDefault()
        const {query} = this.state
        console.log(query)
    }
    render() {
        const {query} = this.state
        return (
            <form onSubmit={handleSubmit}>
                <input value={query} onChange={handleChange} />
                <button>Search Movie</button>
            </form>
        )
    }
}