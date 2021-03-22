import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand  from 'react-bootstrap/NavbarBrand';
import './App.css';

import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

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
        text: 'This will hold a short Bio about myself.',
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

            <Route path="/" exact render={() => <AboutMe title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />}/>
            <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />}/>
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}/>
            <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} />}/>

            <Footer/>

          </Container> 
        </Router>
    );
  }
}

export default App;
