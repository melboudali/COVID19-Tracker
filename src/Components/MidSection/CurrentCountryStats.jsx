import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({ countriesData: { currentHistory } }) => {
  useEffect(() => {
    if (currentHistory !== null) console.log(currentHistory.timeline);
  }, [currentHistory]);
  return <div></div>;
};

CurrentCountryStats.propTypes = {
  currentHistory: PropTypes.object
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(CurrentCountryStats);
