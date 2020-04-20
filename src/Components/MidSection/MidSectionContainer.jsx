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
      <Row className='rowPadding'>
        <Col xs='12' sm='12' md='8' lg='8' xl='8' className='noPadding'>
          <div className='GlobalMap'>
            <GlobalMap />
          </div>
        </Col>
        <Col xs='12' sm='12' md='4' lg='4' xl='4' className='noPadding'>
            <AllCountriesList />
        </Col>
      </Row>
      <Row>
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
