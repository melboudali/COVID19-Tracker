import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
// import Spinner from 'react-bootstrap/Spinner';


const GlobalMap = ({ countriesData: { allCountries, loading } }) => {
  // let MapData = [];
  // const [getCountriesData, setCountriesData] = useState([]);

  // const MapDataHandler = () => {
  //   allCountries.map(country => {
  //     MapData.push({
  //       id: country.countryInfo.iso2,
  //       name: country.country,
  //       value: country.cases,
  //       color: '#8aabb0'
  //     });
  //   });
  //   setCountriesData([...MapData]);
  // };

  // useEffect(() => {

  // }, []);

  return (
    <div>
      {/* {getCountriesData.length === 0 || loading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div id='chartdiv' />
      )} */}
    </div>
  );
};

const mapStateToPtops = state => ({ countriesData: state.Data });

export default connect(mapStateToPtops)(GlobalMap);
