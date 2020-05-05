import React, { useState, useEffect } from 'react';
import BarChartItem from './BarChartItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const BarChart = ({
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
    WWDates && !Dates
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
        // eslint-disable-next-line
  }, [Dates, WWDates]);

  return (
    <>
      {(!WWDates && !WWCases && !WWDeaths && !WWRecovered) ||
      currentCountryLoading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <BarChartItem
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

BarChart.propTypes = {
  Dates: PropTypes.array,
  Cases: PropTypes.array,
  Deaths: PropTypes.array,
  Recovered: PropTypes.array,
  WWDates: PropTypes.array,
  WWCases: PropTypes.array,
  WWDeaths: PropTypes.array,
  WWRecovered: PropTypes.array,
  currentCountryLoading: PropTypes.bool
};

export default connect(mapStateToProps)(BarChart);
