import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import Spinner from 'react-bootstrap/Spinner';

const GlobalMap = ({
  CurrentCountryData: { currentCountry, currentCountryLoading },
  AllCountriesData: { allCountriesData, allCountriesloading }
}) => {
  const [getToken, setToken] = useState(
    'pk.eyJ1Ijoia25pdHoiLCJhIjoiY2s5NWx5emQwMDA4aDNkb2l4MHVoMGpnZCJ9.3xTVEOUSMOapHza9bsH-Yg'
  );

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
          mapboxApiAccessToken={getToken}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          onViewportChange={viewPort => {
            setViewPort(viewPort);
          }}></ReactMapGL>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData,
  AllCountriesData: state.AllCountries
});

export default connect(mapStateToProps)(GlobalMap);
