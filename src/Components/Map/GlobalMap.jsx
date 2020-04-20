import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

let apiKey;
process.env.NODE_ENV
  ? (apiKey = process.env.REACT_APP_API_KEY)
  : (apiKey = process.env.API_KEY);

const GlobalMap = ({
  CurrentCountryData: { currentCountry, currentCountryLoading },
  AllCountriesData: { allCountriesData, allCountriesloading }
}) => {
  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%'
  });
  const [popupState, setPopupState] = useState({
    state: false,
    lat: 16,
    long: 27
  });

  useEffect(() => {
    currentCountry !== null && !currentCountryLoading
      ? setViewPort({
          ...viewPort,
          latitude: currentCountry.lat,
          longitude: currentCountry.long,
          zoom: 3.5,
          transitionDuration: 3000,
          transitionInterpolator: new FlyToInterpolator()
        })
      : setViewPort({
          ...viewPort,
          latitude: 16,
          longitude: 27,
          zoom: 1.3,
          transitionDuration: 3000,
          transitionInterpolator: new FlyToInterpolator()
        });
    // eslint-disable-next-line
  }, [currentCountry, currentCountryLoading]);

  return (
    <Fragment>
      {allCountriesData === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Fragment>
          {' '}
          <p className='mapHeader'>
            <i className='fas fa-globe-africa'></i>Coronavirus World Map
          </p>
          <ReactMapGL
            className='map'
            {...viewPort}
            mapboxApiAccessToken={apiKey}
            mapStyle='mapbox://styles/mapbox/dark-v10'
            onViewportChange={viewPort => {
              setViewPort(viewPort);
            }}>
            {allCountriesData.map((country, id) => (
              <Marker
                key={id}
                latitude={country.countryInfo.lat}
                longitude={country.countryInfo.long}
                offsetTop={-15}
                offsetLeft={-5}>
                <i
                  className='fas fa-circle circle'
                  onMouseEnter={() =>
                    setPopupState({
                      state: true,
                      name: country.country,
                      flag: country.countryInfo.flag,
                      cases: country.cases,
                      deaths: country.deaths,
                      recovered: country.recovered,
                      lat: country.countryInfo.lat,
                      long: country.countryInfo.long
                    })
                  }
                  onMouseLeave={() =>
                    setPopupState({ ...popupState, state: false })
                  }></i>
              </Marker>
            ))}
            {popupState.state && (
              <Popup
                latitude={popupState.lat}
                longitude={popupState.long}
                closeButton={false}
                offsetTop={-10}
                offsetLeft={-5}
                className='popupup'
                onClose={() => {
                  setPopupState({ ...popupState, state: false });
                }}>
                <div>
                  <h6 className='popupHeader'>
                    <img
                      src={popupState.flag}
                      alt='flag'
                      style={{ width: '60px' }}
                    />
                    {popupState.name}
                  </h6>
                  <p className='popupCases'>Cases: {popupState.cases}</p>
                  <p className='popupDeaths'>Deaths: {popupState.deaths}</p>
                  <p className='popupRecovered'>
                    Recovered: {popupState.recovered}
                  </p>
                </div>
              </Popup>
            )}
          </ReactMapGL>
        </Fragment>
      )}
    </Fragment>
  );
};

GlobalMap.prototype = {
  currentCountry: PropTypes.object,
  currentCountryLoading: PropTypes.bool,
  allCountriesData: PropTypes.object,
  allCountriesloading: PropTypes.bool
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData,
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps)(GlobalMap);
