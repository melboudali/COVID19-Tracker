import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllCountriesList from './AllCountriesList';
import CurrentCountryStats from './CurrentCountryStats';
import GlobalMap from '../Map/GlobalMap';

const MidSectionContainer = () => {
  return (
    <Container className='MidSection' fluid>
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <div className='GlobalMap'>
            <GlobalMap />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='12' sm='12' md='6' lg='5' xl='5'>
          <div className='AllCountriesList'>
            <AllCountriesList />
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='7' xl='7'>
          <div className='currentCountryStates'>
            <CurrentCountryStats />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MidSectionContainer;
