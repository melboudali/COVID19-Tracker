import React from 'react';
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CurrentCountryRadar = props => {
  return (
    <Radar
      className='radar'
      data={{
        labels: ['a', 'b', 'c', 'd', 'e', 'f'],
        datasets: [
          {
            // radius: 0,
            label: 'Cases',
            data: [1, 2, 3, 4, 5, 6],
            fill: false,
            borderColor: '#fca903',
            backgroundColor: '#fca903'
          },
          {
            label: 'Deaths',
            data: [7, 8, 9, 10, 11, 12],
            fill: false,
            borderColor: '#d14356',
            backgroundColor: '#d14356'
          },
          {
            label: 'Recovered',
            data: [13, 14, 15, 16, 17, 18],
            fill: false,
            borderColor: '#49d170',
            backgroundColor: '#49d170'
          }
        ]
      }}
    />
  );
};

CurrentCountryRadar.propTypes = {};

export default CurrentCountryRadar;
