import React, { useEffect, useState, useRef } from 'react';
import CurrentCountryLineItem from './CurrentCountryLineItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({
  DataHistory: {
    Dates,
    WWDates,
    Cases,
    WWCases,
    Deaths,
    WWDeaths,
    Recovered,
    WWRecovered,
    currentCountryLoading
  }
}) => {
  return (
    <>
      {!WWDates || currentCountryLoading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : !Dates || currentCountryLoading ? (
        <CurrentCountryLineItem
          WWDates={WWDates}
          Dates={WWDates}
          Cases={WWCases}
          Deaths={WWDeaths}
          Recovered={WWRecovered}
        />
      ) : (
        <CurrentCountryLineItem
          WWDates={null}
          Dates={Dates}
          Cases={Cases}
          Deaths={Deaths}
          Recovered={Recovered}
        />
      )}
    </>
  );
};

CurrentCountryStats.propTypes = {
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData,
  DataHistory: state.DataHistory
});

export default connect(mapStateToProps)(CurrentCountryStats);
