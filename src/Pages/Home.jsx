import React, { Fragment } from 'react';
import Countries from '../Components/TopSection/Countries';
import MidSectionContainer from '../Components/MidSection/MidSectionContainer';
import Navbar from '../Layouts/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
        <Countries />
        <MidSectionContainer />
    </Fragment>
  );
};

export default Home;
