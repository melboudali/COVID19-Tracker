import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllCountriesList from './AllCountriesList';
import CurrentCountryLine from '../Charts/CurrentCountryLine';
import CurrentCountryRadar from '../Charts/CurrentCountryRadar';
import GlobalMap from '../Map/GlobalMap';
import WWStats from './WWStats';

const MidSectionContainer = () => {
  return (
    <Container className='MidSection' fluid>
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <WWStats />
        </Col>
      </Row>
      <Row className='rowPadding'>
        <Col xs='12' sm='12' md='8' lg='8' xl='8' className='noPadding'>
          <p className='mapHeader'>
            <i className='fas fa-globe-africa'></i>Coronavirus World Map
          </p>
          <div className='GlobalMap'>
            <GlobalMap />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='noPadding'>
          <p className='countriesListHeader'>
            <i className='far fa-flag'></i>All Countries Stats
          </p>
          <div className='countriesListContainer'>
            <AllCountriesList />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='currentCountryStats'>
            <CurrentCountryLine />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='currentCountryStats'>
            <CurrentCountryRadar />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4'>
          <div className='currentCountryStats'>
            <CurrentCountryLine />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MidSectionContainer;
