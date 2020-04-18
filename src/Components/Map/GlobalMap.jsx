import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

let apiKey;
if (process.env.NODE_ENV) {
  apiKey = process.env.REACT_APP_API_KEY;
} else {
  apiKey = process.env.API_KEY;
}

const GlobalMap = ({
  CurrentCountryData: { currentCountry, currentCountryLoading },
  AllCountriesData: { allCountriesData, allCountriesloading }
}) => {
  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    transitionDuration: 3000,
    transitionInterpolator: new FlyToInterpolator()
  });

  useEffect(() => {
    currentCountry !== null && !currentCountryLoading
      ? setViewPort({
          ...viewPort,
          latitude: currentCountry.lat,
          longitude: currentCountry.long,
          zoom: 3.5
        })
      : setViewPort({
          ...viewPort,
          latitude: 16,
          longitude: 27,
          zoom: 1.3
        });
  }, [currentCountry, currentCountryLoading]);

  return (
    <>
      {allCountriesData === null || allCountriesloading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ReactMapGL
          className='map'
          {...viewPort}
          mapboxApiAccessToken={apiKey}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          onViewportChange={viewPort => {
            setViewPort(viewPort);
          }}></ReactMapGL>
      )}
    </>
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
