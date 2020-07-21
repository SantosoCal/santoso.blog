import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

// navbar-container seems to control the whole boldness of everything
  .navbar-container {
    background-color: #222;
    font-family: Helvetica, sans-serif;
  }

  .dropdownOption {
    text-color: #000000;
  }
  
  .articleDropdownTitle {
    font-weight: bold;
    color: #ffffff;
  }
  
  .dropdown:after {
    border-bottom: 6px solid #fff;
  }

  .navbar .dropdown-menu:after {
    content: '';
    display: inline-block;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #000; /* change color here, modified for a black arrow */
    position: absolute;
    top: -6px;
    left: 10px;
  }

// this seems to change the colors of the menuItems
  .menuItem {
    color: #ffffff;
    font-weight: bold;
  }

  // a, .navbar-brand, .nav-link {
  //   color: #ffffff;

  //   &:hover {
  //     color: white;
  //   }
  // }

  // keep this
  .navbar-brand {
    color: #ffffff;
    font-weight: bold;
    &:hover {
      color: white;
    }
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

`;

export default class NavigationBar extends React.Component {

  render() {
    return (
      <Styles>
        <Navbar className="navbar-container" expand="lg" variant="dark" bg="black">
          <Navbar.Brand href="/">Andrew Santoso</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link className="menuItem" to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <NavDropdown className="articleDropdownItem" title={<span className="articleDropdownTitle">Articles</span>}>
                <NavDropdown.Item as={Link} to={{pathname:`/articles/essays`, state: {showArticleTable: false}}}>Essays</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={{pathname:`/articles/travels`, state: {showArticleTable: false}}}>Travels</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={{pathname:`/articles/productivity`, state: {showArticleTable: false}}}>Productivity</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={{pathname:`/articles/ideas`, state: {showArticleTable: false}}}>Ideas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link>
                  <Link className="menuItem" to="/reading">Reading</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link className="menuItem" to="/subscribe">Subscribe</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link className="menuItem" to="/about">About</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link className="menuItem" to="/contact">Contact</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
    )
  }

}

