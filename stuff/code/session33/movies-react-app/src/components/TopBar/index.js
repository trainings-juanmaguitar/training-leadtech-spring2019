import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap'

import MoviesSearch from 'components/MoviesSearch/'

import './index.css'
import logo from 'img/logo.png'

const BASE_CLASS = `TopBar`
const CLASS_LOGO = `${BASE_CLASS}-logo`

const TopBar = () => (
  <div className={BASE_CLASS}>
    <Navbar bg="light" expand="lg">
      <Link className={CLASS_LOGO} to="/"><img src={logo} style={{ width: '200px' }} /></Link>
      <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'space-around'}}>
        <Nav style={{ width: '80%'}}>
          <MoviesSearch />
        </Nav>
        <Nav >
          <NavDropdown title="Sections" id="basic-nav-dropdown">
            <Nav.Link as={NavLink} to="/popular">
              Popular
            </Nav.Link>
            <Nav.Link as={NavLink} to="/top_rated">
              Top rated
            </Nav.Link>
            <Nav.Link as={NavLink} to="/now_playing">
              Now Playing
            </Nav.Link>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default TopBar
