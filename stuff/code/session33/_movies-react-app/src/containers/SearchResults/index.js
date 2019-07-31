import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListResults from '../../components/ListResults/'

import { getSearchResults } from '../../services/api'

class SearchResults extends Component {
  state = {
    movies: []
  }

  handleSearch = async query => {
    const movies = await getSearchResults({ query })
    this.setState({ movies })
  }

  componentDidMount () {
    const {
      match: {
        params: { query }
      }
    } = this.props

    this.handleSearch(query)
  }

  render () {
    const { movies: results } = this.state
    return (
      <div className="container">
        <h1>Search Results</h1>
        <ListResults results={results} />
      </div>
    )
  }
}

SearchResults.propTypes = {
  match: PropTypes.object
}

export default SearchResults
