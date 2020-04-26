import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CurrentCountryLineItem = ({
  Dates,
  Cases,
  Deaths,
  Recovered,
  CurrentCountryData: { currentCountry }
}) => {
  return (
    <>
      <Line
        className='Line'
        data={{
          labels: Dates,
          datasets: [
            {
              // radius: 0,
              label: 'Cases',
              data: Cases,
              fill: false,
              borderColor: '#fca903',
              backgroundColor: '#fca903'
            },
            {
              label: 'Deaths',
              data: Deaths,
              fill: false,
              borderColor: '#d14356',
              backgroundColor: '#d14356'
            },
            {
              label: 'Recovered',
              data: Recovered,
              fill: false,
              borderColor: '#49d170',
              backgroundColor: '#49d170'
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: currentCountry
              ? `${currentCountry.country}'s Stats`
              : "World's Stats"
          },
          tooltips: {
            enabled: true,
            backgroundColor: '#f0f0f0',
            callbacks: {
              label: (tooltipItem, data) => {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.yLabel * 100) / 100;
                return label;
              }
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            pointStyle: 'triangle'
          }
        }}
      />
    </>
  );
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData
});

CurrentCountryLineItem.propTypes = {};

export default connect(mapStateToProps)(CurrentCountryLineItem);
