import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCountries, WWStatsFetch } from '../../Actions/Countries';
import { setCurrentCountry } from '../../Actions/CurrentCountry';
import {
  getCurrentHistory,
  getWWHistory,
  clearCurrentHistory
} from '../../Actions/DataHistory';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AsyncSelect from 'react-select/async';
import CountriesItem from './CountriesItem';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

const Countries = ({
  AllCountriesData: { allCountriesData, allCountriesloading },
  getAllCountries,
  WWStatsFetch,
  setCurrentCountry,
  getCurrentHistory,
  getWWHistory,
  clearCurrentHistory
}) => {
  useEffect(() => {
    getAllCountries();
    WWStatsFetch();
    getWWHistory();
  }, [getAllCountries, WWStatsFetch, getWWHistory]);

  const [, setInputValue] = useState('');

  const filterCountrie = inputValue => {
    if (!allCountriesloading && allCountriesData !== null)
      return allCountriesData.filter(c =>
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
        countryInfo: { flag, lat, long },
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        tests
      } = e;
      // Set Current country
      setCurrentCountry({
        updated,
        country,
        flag,
        lat,
        long,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        tests
      });

      getCurrentHistory(country);
    } else {
      setCurrentCountry(null);
      clearCurrentHistory();
    }
  };

  return (
    <Container>
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <div className='countriesSection'>
            <div className='countriesDopdown'>
              {allCountriesloading || allCountriesData === null ? (
                <div className='Spinner'>
                  <Spinner animation='border' role='status' variant='success'>
                    <span className='sr-only'>Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <div>
                  <AsyncSelect
                    placeholder='Search or Select Country ...'
                    options={allCountriesData}
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
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Countries.prototype = {
  allCountriesData: PropTypes.object,
  allCountriesloading: PropTypes.bool.isRequired,
  getAllCountries: PropTypes.func.isRequired,
  setCurrentCountry: PropTypes.func.isRequired,
  WWStatsFetch: PropTypes.func.isRequired,
  getCurrentHistory: PropTypes.func.isRequired,
  getWWHistory: PropTypes.func.isRequired,
  clearCurrentHistory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps, {
  getAllCountries,
  WWStatsFetch,
  setCurrentCountry,
  getCurrentHistory,
  getWWHistory,
  clearCurrentHistory
})(Countries);
