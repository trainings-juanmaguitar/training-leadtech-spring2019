import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ListResults from 'components/ListResults/'
import TopBar from 'components/TopBar/'

import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies
} from 'services/api'

const categories = {
  popular: {
    title: 'Popular Movies',
    getMovies: getPopularMovies
  },
  top_rated: {
    title: 'Top Rated Movies',
    getMovies: getTopRatedMovies
  },
  now_playing: {
    title: 'Now Playing Movies',
    getMovies: getNowPlayingMovies
  }
}

const MoviesCategory = props => {
  const {
    match: {
      params: { 0: category, pageNumber: page = 1 }
    },
    history
  } = props

  const { title, getMovies } = categories[category]

  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const getMoviesCategory = async ({ page }) => {
    const { results, totalPages, totalResults } = await getMovies({ page })
    console.log()
    setResults(results)
    setTotalPages(totalPages)
    setTotalResults(totalResults)
  }

  const handleChangePage = pageNumber => {
    history.push(`/${category}/page/${pageNumber}`)
  }

  useEffect(() => {
    getMoviesCategory({ page })
    return () => {}
  }, [page, category])

  return (
    <div>
      <TopBar />
      <ListResults
        title={title}
        results={results}
        page={+page}
        totalPages={totalPages}
        totalResults={totalResults}
        onChangePage={handleChangePage}
      />
    </div>
  )
}

MoviesCategory.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

export default MoviesCategory
