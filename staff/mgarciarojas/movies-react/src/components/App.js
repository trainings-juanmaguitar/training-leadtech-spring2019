import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import MoviesSearch from "./MoviesSearch/";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import MovieDetails from "./MovieDetails";
import UpcomingMovies from "./UpcomingMovies";
import NowPlayingMovies from "./NowPlayingMovies";
import MoviesSearchQuery from "./MoviesSearchQuery/";



const App = () => (
  <Router>
    <div className="container">
    
      <Navbar bg="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <MoviesSearch />
      </Navbar>
    
      <nav>
 <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   Categorías
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/">Home</Dropdown.Item>
    <Dropdown.Item href="/popular">Popular</Dropdown.Item>
    <Dropdown.Item href="/topRated">Top Rated</Dropdown.Item>
    <Dropdown.Item href="/upcoming">Upcoming</Dropdown.Item>
    <Dropdown.Item href="/now_playing">Now Playing</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </nav>

      <Route path="/" exact component={MoviesSearch} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/now_playing" component={NowPlayingMovies} />
      <Route path="/search/:query" component={MoviesSearchQuery} />
    </div>
  </Router>
)

export default App;
