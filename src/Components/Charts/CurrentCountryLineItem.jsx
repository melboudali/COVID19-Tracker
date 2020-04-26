import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CurrentCountryLineItem = ({
  WWDates,
  Dates,
  Cases,
  Deaths,
  Recovered
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
            text: WWDates
              ? 'Worl Wide Covid-19 | cases, deaths, recovered'
              : 'Current Country'
          },
          tooltips: {
            enabled: true,
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
            ]
          }
        }}
      />
    </>
  );
};

CurrentCountryLineItem.propTypes = {};

export default CurrentCountryLineItem;
