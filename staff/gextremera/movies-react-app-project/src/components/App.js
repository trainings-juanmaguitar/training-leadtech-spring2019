import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Bootstrap Import Inicio
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
//Bootstrap Import Fin


import SearchForm from "./SearchForm";
import MoviesSearch from "./MoviesSearch/";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import NowPlayingMovies from "./NowPlayingMovies";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";



const App = () => (
  <Router>
    <div className="container">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand>
          <Link to="/" exact>
            <img src="/public/assets/images/logo.png"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav alignRight className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown" bg="dark" variant="dark">
            <NavDropdown.Item><Link to="/popular">Popular</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/topRated">Top Rated</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/now_playing">Now Playing</Link></NavDropdown.Item>            
          </NavDropdown>
        </Nav>
        <Form inline>
          <MoviesSearch />          
        </Form>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={MoviesSearch} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/now_playing" component={NowPlayingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" component={SearchResults} />
    </div>
  </Router>
)

export default App;
