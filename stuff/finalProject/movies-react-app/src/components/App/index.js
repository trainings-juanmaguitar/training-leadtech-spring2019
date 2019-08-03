import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home/'

import MoviesCategory from 'pages/MoviesCategory/'
import SearchResults from 'pages/SearchResults/'
import MovieDetails from 'pages/MovieDetails/'

const App = () => (
  <Router>
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" exact component={SearchResults} />
      <Route path="/search/:query/page/:pageNumber" component={SearchResults} />

      <Route
        path="/(popular|upcoming|now_playing|top_rated)"
        exact
        component={MoviesCategory}
      />

      <Route
        path="/(popular|upcoming|now_playing|top_rated)/page/:pageNumber"
        exact
        component={MoviesCategory}
      />
    </div>
  </Router>
)

export default App
