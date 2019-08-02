import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ListResults from 'components/ListResults/'
import TopBar from 'components/TopBar'

import { getSearchResults } from 'services/api'

const SearchResults = props => {
  const {
    match: {
      params: { query, pageNumber: page = 1 }
    },
    history
  } = props

  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const handleChangePage = pageNumber => {
    history.push(`/search/${query}/page/${pageNumber} `)
  }

  const searchMoviesByQuery = async ({ query, page }) => {
    const { results, totalPages, totalResults } = await getSearchResults({
      query,
      page
    })
    console.log({ results, totalPages, totalResults, query, page })
    setResults(results)
    setTotalPages(totalPages)
    setTotalResults(totalResults)
  }

  useEffect(() => {
    searchMoviesByQuery({ query, page })
    return () => {}
  }, [query, page])

  return (
    <div className="container">
      <TopBar />
      <ListResults
        title={`Search results for "${query}"`}
        results={results}
        page={+page}
        totalPages={+totalPages}
        totalResults={+totalResults}
        onChangePage={handleChangePage}
      />
    </div>
  )
}

SearchResults.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default SearchResults
