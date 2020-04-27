import React, { useEffect, useState } from 'react';
import pieChartItem from './pieChartItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const pieChart = ({
  AllCountriesData: { WWStats, allCountriesloading },
  CurrentCountryData: { currentCountry }
}) => {

  const [Data, setData] = useState(null);

  useEffect(() => {
    WWStats !== null && currentCountry === null
      ? setData({
          Cases: WWStats.cases,
          Deaths: WWStats.deaths,
          Recovered: WWStats.deaths
        })
      : setData({
          Cases: currentCountry.cases,
          Deaths: currentCountry.deaths,
          Recovered: currentCountry.deaths
        });
  }, [WWStats, currentCountry]);

  return (
    <>
      {!WWStats || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <pieChartItem
          Cases={Data.Cases}
          Deaths={Data.Deaths}
          Recovered={Data.Recovered}
        />
      )}
    </>
  );
};

pieChart.propTypes = {
  WWStats: PropTypes.object,
  allCountriesloading: PropTypes.bool,
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries,
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(pieChart);
