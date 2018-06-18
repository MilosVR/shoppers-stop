import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Home from './Home'
import App from './App'
import SignIn from './SignIn'
import './Navigation.css'



export default class Navigation extends Component {

  render() {
    return (
 
    <Navbar default collapseOnSelect fixedTop> 
        <Navbar.Header >
          <Navbar.Brand>
            <Link to="/"><span className='fixTheFont'><b>Mec@Company</b></span></Link>
          </Navbar.Brand>
          
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} component={Home} href="/" to="/">
              <b>Home</b>
            </NavItem>

            <NavItem eventKey={2} component={App} href="/App" to="/App">
              <b>Promo Code</b>
            </NavItem>

            <NavItem eventKey={3} component={SignIn} href="/SignIn" to="/SignIn">
              <b>LogIn</b>
            </NavItem>

          </Nav>
        </Navbar.Collapse>

      </Navbar>

    )
  }
}

