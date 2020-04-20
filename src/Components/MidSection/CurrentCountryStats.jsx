import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
// import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({
  // CurrentCountryData: { currentCountry, currentCountryLoading },
  DataHistory: { Dates, Cases, Deaths, Recovered, currentCountryLoading }
}) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  return (
    // <canvas id='chartJS' />
    <>
      {currentCountryLoading || Dates === null ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Line
          className='Line'
          data={{
            labels: Dates,
            datasets: [
              {
                // radius: 0,
                label: "Cases",
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
            tooltips: {
              enabled: true,
              callbacks: {
                label: (tooltipItem, data) => {
                  var label =
                    data.datasets[tooltipItem.datasetIndex].label || '';

                  if (label) {
                    label += ':';
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
              ]
            }
          }}
        />
      )}
    </>
  );
};

CurrentCountryStats.propTypes = {
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData,
  DataHistory: state.DataHistory
});

export default connect(mapStateToProps)(CurrentCountryStats);