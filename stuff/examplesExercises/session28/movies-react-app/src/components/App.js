import React from "react";

import Navbar from 'react-bootstrap/Navbar';


import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import MoviesSearch from "./MoviesSearch/";

const App = () => (
  <div className="container">
  {
    /*
    <Navbar bg="light">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Navbar>
  <MoviesSearch />
  <PopularMovies />
  */
}
  <TopRatedMovies />
  </div>
)

export default App;
