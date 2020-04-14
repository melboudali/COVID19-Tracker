import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' expand='lg' sticky='top'>
        <Container>
          <OverlayTrigger
            placement='bottom'
            delay={{ show: 200, hide: 200 }}
            overlay={
              <Tooltip className='myToolTip'> Covid-19 Update </Tooltip>
            }>
            <Navbar.Brand href='#home' className='title'>
              <i className='fas fa-lungs-virus' /> Covid-19 Update
            </Navbar.Brand>
          </OverlayTrigger>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto justify-content-end navWidth'>
              <Nav.Link href='#home'>
                <i className='fas fa-home'></i>
              </Nav.Link>
              <Nav.Link href='#features' target='_blank'>
                <i class='fab fa-github'></i>
              </Nav.Link>
              <Nav.Link href='https://www.who.int/' target='_blank'>
                <i class='fas fa-laptop-medical'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
