import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Countries from '../Components/TopSection/Countries';
import Navbar from '../Layouts/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Countries />
      </Container>
    </Fragment>
  );
};

export default Home;
