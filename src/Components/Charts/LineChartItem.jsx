import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const LineChartItem = ({ Dates, Cases, Deaths, Recovered }) => {
  return (
    <Line
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
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            fontColor: '#8a8a8a'
          }
        },
        tooltips: {
          enabled: true,
          backgroundColor: '#ededed',
          borderWidth: '2',
          borderColor: '#8a8a8a',
          titleFontColor: '#4a4a4a',
          bodyFontColor: '#4a4a4a',
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 10,
                fontColor: '#2e2e2e'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero: true,
                fontSize: 10,
                fontColor: '#2e2e2e'
              }
            }
          ]
        }
      }}
    />
  );
};

LineChartItem.propTypes = {
  Dates: PropTypes.array,
  Cases: PropTypes.array,
  Deaths: PropTypes.array,
  Recovered: PropTypes.array
};

export default LineChartItem;
