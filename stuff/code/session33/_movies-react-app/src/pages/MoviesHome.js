import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import PopularMovies from '../pages/PopularMovies'
import TopRatedMovies from '../pages/TopRatedMovies'
import NowPlayingMovies from '../pages/NowPlayingMovies'

import MoviesSearch from '../containers/MoviesSearch/'

const MoviesHome = props => {
  return (
    <div>
      <MoviesSearch />
      <Route path="/movies/popular" component={PopularMovies} />
      <Route path="/movies/topRated" component={TopRatedMovies} />
      <Route path="/movies/nowPlaying" component={NowPlayingMovies} />
    </div>
  )
}

export default MoviesHome
