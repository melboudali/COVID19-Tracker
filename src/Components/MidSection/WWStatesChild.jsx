import React from 'react';
import moment from 'moment';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const WWStatesChild = ({
  country = null,
  flag = null,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  recovered,
  tests,
  updated
}) => {
  return (
    <>
      {country !== null && flag !== null ? (
        <h1 className='WWStatsHeader'>
          <img src={flag} alt={country} className='countryFlag' />
          {country}
        </h1>
      ) : (
        <h1 className='WWStatsHeader'>
          <i class='fas fa-globe'></i> Coronavirus World Stats
        </h1>
      )}

      <div className='WCDR'>
        <OverlayTrigger
          key='Cases'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Cases
            </Tooltip>
          }>
          <div className='WWCases'>
            <p className='WWIcons'>
              <i className='fas fa-users'></i> Cases
            </p>
            {cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            {todayCases > 0 && (
              <span className='WWtodayResults'>
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
          <div className='WWDeaths'>
            <p className='WWIcons'>
              <i className='fas fa-skull'></i> Deaths
            </p>
            {deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            {todayDeaths > 0 && (
              <span className='WWtodayResults'>
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
          <div className='WWRecovered'>
            <p className='WWIcons'>
              <i className='fas fa-hospital-user'></i> Recovered
            </p>
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
          <div className='WWTests'>
            <p className='WWIcons'>
              <i className='fas fa-vial'></i> Tests
            </p>
            {tests.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </div>
        </OverlayTrigger>
      </div>
      <p className='lastUpdate'>
        <i className='far fa-clock' />
        Last update:
        <span>{updated > 0 && moment(updated).fromNow()}.</span>
      </p>
    </>
  );
};

export default WWStatesChild;
