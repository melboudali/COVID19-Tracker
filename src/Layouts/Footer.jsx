import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  const [nav, showNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 200 ? showNav(true) : showNav(false);
    };
  }, []);

  const scrollUP = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div
        className={nav ? `upBtn showBotNav` : `upBtn hideBotNAv`}
        onClick={scrollUP}>
        <i className='fas fa-angle-up'></i>
      </div>
      <div className='footer'>
        <Navbar
          className='botNavbar'
          variant='light'
          expand='lg'
          sticky='bottom'>
          <Container>
            <Nav className='mr-auto justify-content-end navWidth'>
              <Nav.Link
                href='https://corona.lmao.ninja/'
                target='_blank'>
                <i
                  className='fas fa-code navIcons'
                  title='Data Source: NOVELCovid/API'></i>
              </Nav.Link>
              <Nav.Link
                href='https://github.com/MedElBoudali'
                target='_blank'>
                <i className='fab fa-github-alt navIcons' title='My Github'></i>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Footer;
