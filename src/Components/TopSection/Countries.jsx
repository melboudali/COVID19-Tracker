import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries, setCurrent } from '../../Actions/CountriesA';
import moment from 'moment';
import AsyncSelect from 'react-select/async';
import CountriesItem from './CountriesItem';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Countries = ({
  countriesData: { allCountries, currentCountry, loading },
  getCountries,
  setCurrent
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
    callback(filterCountrie(InputValue));
  };

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue({ inputValue });
    return inputValue;
  };

  const onChange = e => {
    if (e !== null) {
      const {
        updated,
        country,
        countryInfo: { flag },
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        tests
      } = e;
      SetSelectedCountry(country);
      //   Set Current country
      setCurrent({
        updated,
        country,
        flag,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        tests
      });
      // updated, country, countryInfo.flag, cases, todayCases, deaths, todayDeaths, recovered, active, critical, tests
    }
  };

  return (
    <div className='countriesSection'>
      <div className='countriesDopdown'>
        <p>Selected Country: {`${SelectedCountry}`}</p>
        {loading || allCountries === null ? (
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          <div>
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
              onChange={onChange}
              components={{ Option: CountriesItem }}
              className='searchBox'
              autoFocus={true}
              isClearable={true}
              // menuIsOpen={true}
            />
            <p className='lastUpdate'>
              <i className='far fa-clock' />
              Last update:
              <span>
                {currentCountry !== null &&
                  moment(currentCountry.updated).fromNow()}
                .
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Countries.prototype = {
  allCountries: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  currentCountry: PropTypes.object,
  getCountries: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps, { getCountries, setCurrent })(
  Countries
);
