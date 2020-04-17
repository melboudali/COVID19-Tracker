import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({
  CurrentCountryData: { currentCountry, currentCountryLoading }
}) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  let date = [];
  let myCases = [];
  let myDeaths = [];
  let myRecovered = [];
  let newChartInstance = null;

  const swapData = () => {
    for (let [key, value] of Object.entries(currentCountry.timeline.cases)) {
      let newDate = key.split('/');
      date.push(`${newDate[1]}/${newDate[0]}`);
      myCases.push(value);
    }
    for (let [key, value] of Object.entries(currentCountry.timeline.deaths)) {
      myDeaths.push(value);
    }
    for (let [key, value] of Object.entries(currentCountry.timeline.recovered)) {
      myRecovered.push(value);
    }
  };

  useEffect(() => {
    if (currentCountry !== null && !currentCountryLoading) {
      swapData();
      newChartInstance = new Chart('chartJS', {
        type: 'line',

        data: {
          //Bring in data
          labels: date,
          datasets: [
            {
              // radius: 0,
              label: 'Cases',
              data: myCases,
              fill: false,
              borderColor: '#fca903',
              backgroundColor: '#fca903'
            },
            {
              // radius: 0,
              label: 'Deaths',
              data: myDeaths,
              fill: false,
              borderColor: '#d14356',
              backgroundColor: '#d14356'
            },
            {
              // radius: 0,
              label: 'Recovered',
              data: myRecovered,
              fill: false,
              borderColor: '#49d170',
              backgroundColor: '#49d170'
            }
          ]
        },
        options: {
          responsive: true,
          aspectRatio: 4,
          maintainAspectRatio: false,
          tooltips: {
            enabled: true
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
        }
      });
      setChartInstance(newChartInstance);
    }

    // eslint-disable-next-line
  }, [currentCountry, currentCountryLoading, chartContainer]);

  return (
    <canvas id='chartJS' />
    // <div>
    //   {/* {loading || myCases.length === 0 ? (
    //     <div className='Spinner'>
    //       <Spinner animation='border' role='status' variant='success'>
    //         <span className='sr-only'>Loading...</span>
    //       </Spinner>
    //     </div>
    //   ) : (
    //     )} */}
    // </div>
  );
};

CurrentCountryStats.propTypes = {
  currentCountry: PropTypes.object
};

const mapStateToProps = state => ({
  CurrentCountryData: state.CurrentCountryData
});

export default connect(mapStateToProps)(CurrentCountryStats);
