import React from 'react';
import Child from './WWStatsChild';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const WWStats = ({
  AllCountriesData: { WWStats, allCountriesloading },
  CurrentCountryData: { currentCountry }
}) => {
  const { updated, cases, todayCases, deaths, todayDeaths, recovered, tests } =
    WWStats || {};

  return (
    <div className='WWStats'>
      {WWStats === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : currentCountry === null || allCountriesloading ? (
        <Child
          cases={cases}
          todayCases={todayCases}
          deaths={deaths}
          todayDeaths={todayDeaths}
          recovered={recovered}
          tests={tests}
          updated={updated}
        />
      ) : (
        <Child
          country={currentCountry.country}
          flag={currentCountry.flag}
          cases={currentCountry.cases}
          todayCases={currentCountry.todayCases}
          deaths={currentCountry.deaths}
          todayDeaths={currentCountry.todayDeaths}
          recovered={currentCountry.recovered}
          tests={currentCountry.tests}
          updated={currentCountry.updated}
        />
      )}
    </div>
  );
};

WWStats.prototype = {
  WWStats: PropTypes.object,
  allCountriesloading: PropTypes.bool,
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries,
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(WWStats);
