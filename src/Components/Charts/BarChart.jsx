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
    WWRecovered
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
      {!getDateHistory ? (
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
  Dates: PropTypes.number,
  Cases: PropTypes.number,
  Deaths: PropTypes.number,
  Recovered: PropTypes.number,
  WWDates: PropTypes.number,
  WWCases: PropTypes.number,
  WWDeaths: PropTypes.number,
  WWRecovered: PropTypes.number
};

export default connect(mapStateToProps)(BarChart);
