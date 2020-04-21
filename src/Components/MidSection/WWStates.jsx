import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const WWStates = ({ AllCountriesData: { WWStates, allCountriesloading } }) => {
  return (
    <div className='WWStates'>
      {WWStates === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <h1 className='WWStatesHeader'>
            <i class='fas fa-globe'></i> Coronavirus World States
          </h1>
          <div className='WCDR'>
            <OverlayTrigger
              key='Cases'
              placement='bottom'
              overlay={
                <Tooltip className='myToolTip' id='tooltip-bottom'>
                  Confirmed Cases
                </Tooltip>
              }>
              <div className='Cases'>
                <i className='fas fa-users'></i>
                {WWStates.cases
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                {WWStates.todayCases > 0 && (
                  <span className='todayResults'>
                    +
                    {WWStates.todayCases
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </span>
                )}
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              key='Deaths'
              placement='bottom'
              overlay={
                <Tooltip className='myToolTip' id='tooltip-bottom'>
                  Confirmed Deaths
                </Tooltip>
              }>
              <div className='Deaths'>
                <i className='fas fa-skull'></i>
                {'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                {'222222222' > 0 && (
                  <span className='todayResults'>
                    +{'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </span>
                )}
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              key='Recovered'
              placement='bottom'
              overlay={
                <Tooltip className='myToolTip' id='tooltip-bottom'>
                  Confirmed Recovered
                </Tooltip>
              }>
              <div className='Recovered'>
                <i className='fas fa-hospital-user'></i>
                {'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              key='Tests'
              placement='bottom'
              overlay={
                <Tooltip className='myToolTip' id='tooltip-bottom'>
                  Confirmed Tests
                </Tooltip>
              }>
              <div className='Tests'>
                <i className='fas fa-vial'></i>
                {'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </div>
            </OverlayTrigger>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps)(WWStates);
