import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import TopBar from 'components/TopBar'
import { getMovieDetails } from 'services/api'

const MovieDetails = ({
  match: {
    params: { id }
  }
}) => {
  const [result, setResult] = useState([])

  const getMovieById = async ({ id }) => {
    const result = await getMovieDetails({ id })
    console.log(result)
    setResult(result)
  }

  useEffect(() => {
    getMovieById({ id })
    return () => {}
  }, [])

  const { title, overview, release_date: releaseDate } = result
  const year = releaseDate && releaseDate.split('-')[0]
  return (
    <div>
      <TopBar />
      {result && (
        <div>
          <h1>
            {title} <small>{year}</small>
          </h1>
          <p>{overview}</p>
        </div>
      )}
    </div>
  )
}

MovieDetails.propTypes = {
  match: PropTypes.object
}

export default MovieDetails
