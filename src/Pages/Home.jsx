import React, { Fragment } from 'react';
import Countries from '../Components/TopSection/Countries';
import MidSectionContainer from '../Components/MidSection/MidSectionContainer';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Countries />
      <MidSectionContainer />
      <Footer />
    </Fragment>
  );
};

export default Home;
