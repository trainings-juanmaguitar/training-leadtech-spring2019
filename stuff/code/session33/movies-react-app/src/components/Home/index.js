import React from 'react'
import { Link } from 'react-router-dom'

import MoviesSearch from 'components/MoviesSearch'
import logo from 'img/logo.png'

import './index.css'

const Home = () => (
  <div>
    <img src={logo} style={{ width: '100%', marginBottom: '40px' }} />
    <h2 className="text-center">Look for your favorite movies...</h2>
    <MoviesSearch />
    <h2 className="text-center" style={{ marginTop: '40px' }}>
      Or go to these categories...
    </h2>
    <div className="Home-categories">
      <Link to="/popular">
        <p>Popular</p>
      </Link>
      <Link to="/topRated">
        <p>Top rated</p>
      </Link>
      <Link to="/nowPlaying">
        <p>Now Playing</p>
      </Link>
    </div>
  </div>
)

export default Home
