import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const WWStates = () => {
  return (
    <div className='WWStates'>
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
            {'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            {'222222222' > 0 && (
              <span className='todayResults'>
                +{'222222222'.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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
    </div>
  );
};

export default WWStates;
