import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

//Bootstrap Import Inicio
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Col} from 'react-bootstrap';
//Bootstrap Import Fin


import PopularMovies from "../containers/PopularMovies";
import TopRatedMovies from "../containers/TopRatedMovies";
import MovieDetails from "../containers/MovieDetails";
import NowPlayingMovies from "../containers/NowPlayingMovies";
import UpComingMovies from "../containers/UpComing";


import MoviesSearch from "../containers/MoviesSearch/";
import SearchResults from "../containers/SearchResults";

const App = () => (
  <Router>
    <div className="container">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <Link to="/" exact>
            <img className="logo" src={logo}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav alignRight className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown" bg="dark" variant="dark">
            <NavDropdown.Item><Link to="/popular">Popular</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/topRated">Top Rated</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/now_playing">Now Playing</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/upcoming">UpComing</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={MoviesSearch} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/now_playing" component={NowPlayingMovies} />
      <Route path="/upcoming" component={UpComingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />      
      <Route path="/search/:query" component={SearchResults} />
    </div>
  </Router>
)

export default App;
