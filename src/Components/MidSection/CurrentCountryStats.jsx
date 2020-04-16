import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({
  countriesData: { currentHistory, currentCountry, loading }
}) => {
  let myData = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  const [getData, setData] = useState([]);

  const swapData = () => {
    for (let [key, value] of Object.entries(currentHistory.timeline.cases)) {
      let data = { date: `${key}`, cases: `${value}` };
      cases.push(data);
    }
    for (let [key, value] of Object.entries(currentHistory.timeline.deaths)) {
      let data = { date: `${key}`, deaths: `${value}` };
      deaths.push(data);
    }
    for (let [key, value] of Object.entries(
      currentHistory.timeline.recovered
    )) {
      let data = { date: `${key}`, recovered: `${value}` };
      recovered.push(data);
    }
    if (cases.length > 0 && deaths.length > 0 && recovered.length > 0) {
      for (let c = 0; c < cases.length; c++) {
        myData.push({
          date: cases[c].date,
          cases: cases[c].cases,
          deaths: deaths[c].deaths,
          recovered: recovered[c].recovered
        });
      }
      setData([...myData]);
    }
  };

  useEffect(() => {
    if (currentHistory !== null && !loading) {
      swapData();
    }
    // eslint-disable-next-line
  }, [currentHistory, loading]);

  return (
    <div>
      {getData.length === 0 || loading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div id='chartdiv' className='graph' />
      )}
    </div>
  );
};

CurrentCountryStats.propTypes = {
  currentHistory: PropTypes.object
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(CurrentCountryStats);
