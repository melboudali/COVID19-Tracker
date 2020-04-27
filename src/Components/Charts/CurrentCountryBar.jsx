import React, { useState, useEffect } from 'react';
import CurrentCountryBarItem from './CurrentCountryBarItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const CurrentCountryBar = ({
  DataHistory: {
    Dates,
    Cases,
    Deaths,
    Recovered,
    WWDates,
    WWCases,
    WWDeaths,
    WWRecovered,
    currentCountryLoading
  }
}) => {
  const [getDateHistory, setDataHistory] = useState(null);
  useEffect(() => {
    !Dates && WWDates
      ? setDataHistory({
          Dates: WWDates,
          Cases: WWCases,
          Deaths: WWDeaths,
          Recovered: WWRecovered
        })
      : setDataHistory({
          Dates,
          Cases,
          Deaths,
          Recovered
        });
  }, [Dates, WWDates]);

  return (
    <>
      {!WWDates || currentCountryLoading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CurrentCountryBarItem
          Dates={getDateHistory.Dates}
          Cases={getDateHistory.Cases}
          Deaths={getDateHistory.Deaths}
          Recovered={getDateHistory.Recovered}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  DataHistory: state.DataHistory
});

CurrentCountryBar.propTypes = {};

export default connect(mapStateToProps)(CurrentCountryBar);
