import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';


import MoviesSearch from "./MoviesSearch/";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import MovieDetails from "./MovieDetails";

const App = () => (
  <Router>
    <div className="container">
    
      <Navbar bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
    
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/topRated">Top Rated</Link>
            </li>
          </ul>
        </nav>

      <Route path="/" exact component={MoviesSearch} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/movie/:id" component={MovieDetails} />

    </div>
  </Router>
)

export default App;
