import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const WWStats = ({ AllCountriesData: { WWStats, allCountriesloading } }) => {
  let {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    tests
  } = WWStats || {};

  return (
    <div className='WWStats'>
      {WWStats === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <h1 className='WWStatsHeader'>
            <i class='fas fa-globe'></i> Coronavirus World Stats
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
                {cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                {todayCases > 0 && (
                  <span className='todayResults'>
                    +
                    {todayCases
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
                {deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                {todayDeaths > 0 && (
                  <span className='todayResults'>
                    +
                    {todayDeaths
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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
                {recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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
                {tests.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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

export default connect(mapStateToProps)(WWStats);
