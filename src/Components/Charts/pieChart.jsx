import React, { useEffect, useState } from 'react';
import PieChartItem from './PieChartItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const PieChart = ({
  AllCountriesData: { WWStats, allCountriesloading },
  CurrentCountryData: { currentCountry }
}) => {
  useEffect(() => {
    if (currentCountry) {
      setDatas({
        Cases: currentCountry.cases,
        Deaths: currentCountry.deaths,
        Recovered: currentCountry.recovered
      });
    } else if (WWStats) {
      setDatas({
        Cases: WWStats.cases,
        Deaths: WWStats.deaths,
        Recovered: WWStats.recovered
      });
    }
  }, [WWStats, currentCountry]);

  const [getDatas, setDatas] = useState(null);

  return (
    <>
      {!getDatas || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <PieChartItem
          Cases={getDatas.Cases}
          Deaths={getDatas.Deaths}
          Recovered={getDatas.Recovered}
        />
      )}
    </>
  );
};

PieChart.propTypes = {
  WWStats: PropTypes.object,
  allCountriesloading: PropTypes.bool,
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries,
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(PieChart);
