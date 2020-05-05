import React from 'react';
import { connect } from 'react-redux';
import ContriesListItem from './ContriesListItem';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const AllCountriesList = ({
  AllCountriesData: {
    allCountriesData,
    allCountriesSortedByCases,
    allCountriesloading
  }
}) => {
  return (
    <>
      {allCountriesData === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className='AllCountriesList'>
          {allCountriesSortedByCases.map((country, id) => (
            <ContriesListItem country={country} key={id} id={id} />
          ))}
        </div>
      )}
    </>
  );
};

AllCountriesList.prototype = {
  allCountriesData: PropTypes.array,
  allCountriesSortedByCases: PropTypes.array,
  allCountriesloading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps)(AllCountriesList);
