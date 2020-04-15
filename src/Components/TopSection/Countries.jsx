import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../Actions/CountriesA';
import AsyncSelect from 'react-select/async';
import CountriesItem from './CountriesItem';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Countries = ({
  countriesData: { allCountries, loading },
  getCountries
}) => {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const [, setInputValue] = useState('');
  const [SelectedCountry, SetSelectedCountry] = useState('');

  const filterCountrie = inputValue => {
    if (!loading && allCountries !== null)
      return allCountries.filter(c =>
        c.country.toLowerCase().includes(inputValue.toLowerCase())
      );
  };

  const loadOptions = (InputValue, callback) => {
    setTimeout(() => {
      callback(filterCountrie(InputValue));
    }, 1000);
  };

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue({ inputValue });
    return inputValue;
  };

//   const onChange = e => {
//     if (e !== null) {
//       SetSelectedCountry(e.country);
//       //   Get Current country
//       console.log(e.country);
//     }
//   };

  return (
    <div className='countriesSection'>
      <div className='countriesDopdown'>
        <p>Selected Country: {`${SelectedCountry}`}</p>
        {loading || allCountries === null ? (
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          <AsyncSelect
            placeholder='Search or Select Countrie ...'
            options={allCountries}
            getOptionLabel={option => {
              return (
                <div>
                  <img
                    src={option.countryInfo.flag}
                    className='flag'
                    alt={option.country}
                  />
                  {`${option.country}`}
                </div>
              );
            }}
            getOptionValue={option => option}
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            onInputChange={handleInputChange}
            // onChange={onChange}
            components={{ Option: CountriesItem }}
            className='searchBox'
            autoFocus={true}
            isClearable={true}
            // menuIsOpen={true}
          />
        )}
      </div>
    </div>
  );
};

Countries.prototype = {
  allCountries: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  getCountries: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps, { getCountries })(Countries);
