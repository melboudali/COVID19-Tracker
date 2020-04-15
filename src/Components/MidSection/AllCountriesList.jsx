import React from 'react';
import { connect } from 'react-redux';
import ContriesListItem from './ContriesListItem';
import PropTypes from 'prop-types';

const AllCountriesList = ({ countriesData: { allCountries, loading } }) => {
  return (
    <div>
      {allCountries !== null &&
        !loading &&
        allCountries.map((country, id) => (
          <ContriesListItem country={country} key={id} />
        ))}
    </div>
  );
};

AllCountriesList.prototype = {
  countriesData: PropTypes.array
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(AllCountriesList);
