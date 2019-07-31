import React from 'react'
import { NavLink  } from 'react-router-dom'

import {
  Form,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap'

import MoviesSearch from 'components/MoviesSearch'

const TopBar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <Nav.Link as={NavLink} to="/" exact>
        Home
      </Nav.Link>
    </Navbar.Brand>
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
      <MoviesSearch />
      </Form>

    </Navbar.Collapse>
  </Navbar>
)

export default TopBar
