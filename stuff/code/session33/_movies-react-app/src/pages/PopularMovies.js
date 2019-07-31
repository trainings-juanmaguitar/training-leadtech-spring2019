import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import ListResults from '../components/ListResults/'

import { getPopularMovies } from '../services/api'

const PopularMovies = props => {

  console.log(props)
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getPopularMovies().then(setPopularMovies)
  }, [])

  return (
    <div>
      <Route path="/popular/a" render={() => <p>a</p>} />
      <Route path="/popular/b" render={() => <p>b</p>} />
      <h1>
        Popular Movies
      </h1>
      <ListResults results={popularMovies} />
    </div>
  )
}

export default PopularMovies
