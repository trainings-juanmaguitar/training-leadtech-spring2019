import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

import PopularMovies from '../containers/PopularMovies'
import TopRatedMovies from '../containers/TopRatedMovies'
import MovieDetails from '../containers/MovieDetails'
import NowPlayingMovies from '../containers/NowPlayingMovies'

import MoviesSearch from '../containers/MoviesSearch/'
import SearchResults from '../containers/SearchResults'

const App = () => (
  <Router>
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Sections" id="basic-nav-dropdown">
              <Nav.Link as={NavLink} to="/popular">
                Popular
              </Nav.Link>
              <Nav.Link as={NavLink} to="/topRated">
                Top rated
              </Nav.Link>
              <Nav.Link as={NavLink} to="/nowPlaying">
                Now Playing
              </Nav.Link>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" exact component={MoviesSearch} />
      <Route path="/popular" component={PopularMovies} />
      <Route path="/topRated" component={TopRatedMovies} />
      <Route path="/nowPlaying" component={NowPlayingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search/:query" component={SearchResults} />
    </div>
  </Router>
)

export default App
