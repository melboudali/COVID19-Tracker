import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

const GlobalMap = ({ CurrentCountryData, currentCountryLoading }) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoia25pdHoiLCJhIjoiY2s5NHNmY2ZoMGM5YTNmbnlveTdnb2xxZCJ9.XjlDa7u3f2R1VpoiAytmoA'
  });

  const [currentCountry, setCureentCountry] = useState([]);
  useEffect(() => {
    if (CurrentCountryData !== null || !currentCountryLoading) {
      const { lat, long } = CurrentCountryData;
      setCureentCountry([
        [32.958984, -5.353521],
        [43.50585, 5.615985]
      ]);
    }
  }, [CurrentCountryData]);

  return (
    <>
      <Map
        className='map'
        style='mapbox://styles/mapbox/dark-v10'
        center={[16, 27]}
        zoom={[1.5]}
        // fitBounds={
        //   currentCountry.length > 0 && !currentCountryLoading
        //     ? currentCountry
        //     : [
        //         [32.958984, -5.353521],
        //         [43.50585, 5.615985]
        //       ]
        // }
        containerStyle={{
          height: '100%',
          width: '100%'
        }}>
        <Layer
          type='circle'
          id='marker'
          paint={{
            'circle-opacity': 0.75,
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['get', [2,33,5645]]
            ],
            'circle-color': '#EA240F'
          }}>
          <Feature
            onMouseEnter={() => {}}
            coordinates={[-7.603869, 33.589886]}
          />
          {/* <Feature coordinates={[-97, 38]} />
          <Feature coordinates={[-4, 40]} /> */}
        </Layer>
        {/* <Popup
          coordinates={[-7.603869, 33.589886]}
          offset={{
            'top-left': [12, -38],
            top: [0, -38],
            'top-right': [-12, -38]
          }}>
          <h1>Popup</h1>
        </Popup> */}
        ;
      </Map>
    </>
  );
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(GlobalMap);
