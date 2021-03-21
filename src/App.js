import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand  from 'react-bootstrap/NavbarBrand';
import './App.css';

import Footer from './components/Footer';

// import fontawewome for footer icons


class App extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
      title: "Braudy Herrera",
      headerLinks: [
       { title: 'About Me', path: '/' },
       { title: 'Portfolio', path: '/portfolio' },
       { title: 'Contact', path: '/contact' },
       { title: 'Resume', path: '/resume' }
      ],
      about: {
        title: 'About Me',
      },
      portfolio: {
        title: 'My Projects',
      },
      contact: {
        title: 'Let\'s Talk',
      },
      resume: {
        title: 'Resume',
      },
    }
  }

  render() {
    return (
        <Router>
          <Container className='p-0' fluid={true}>
            <Navbar className='border-bottom' bg='transparent' expand='lg'>
              <Navbar.Brand>Braudy Herrera</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">About</Link>
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Footer/>

          </Container> 
        </Router>
    );
  }
}

export default App;
