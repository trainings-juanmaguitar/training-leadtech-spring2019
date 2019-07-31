import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopBar from 'components/TopBar'

import Home from 'components/Home/'

import PopularMovies from 'components/PopularMovies'
import TopRatedMovies from 'components/TopRatedMovies'
import NowPlayingMovies from 'components/NowPlayingMovies'

import MoviesSearch from 'components/MoviesSearch/'
import SearchResults from 'components/SearchResults'
import MovieDetails from 'components/MovieDetails'

console.log(process.env)

const App = () => (
  <Router>
    <div className="container">

      <Route path="/" exact component={Home} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/nowPlaying" component={NowPlayingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" component={SearchResults} />
    </div>
  </Router>
)

export default App
