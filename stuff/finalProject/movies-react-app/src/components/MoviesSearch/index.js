import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchForm from 'components/SearchForm/'
import { withRouter } from 'react-router-dom'

class MoviesSearch extends Component {
  handleSearch = async query => {
    const { history } = this.props
    history.push(`/search/${query}`)
  }

  render () {
    const { handleSearch } = this
    const { size } = this.props
    return (
      <div className="container">
        <SearchForm size={size} onSubmitForm={handleSearch} />
      </div>
    )
  }
}

MoviesSearch.propTypes = {
  size: PropTypes.string,
  history: PropTypes.object
}

export default withRouter(MoviesSearch)
