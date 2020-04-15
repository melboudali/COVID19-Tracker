import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({ countriesData: { currentHistory } }) => {
  let myDate = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  const [getCases, setCases] = useState([]);

  useEffect(() => {
    if (currentHistory !== null) {
      for (let [key, value] of Object.entries(currentHistory.timeline.cases)) {
        let data = { date: `${key}`, cases: `${value}` };
        cases.push(data);
      }
      for (let [key, value] of Object.entries(currentHistory.timeline.deaths)) {
        let data = { date: `${key}`, deaths: `${value}` };
        deaths.push(data);
      }
      for (let [key, value] of Object.entries(
        currentHistory.timeline.recovered
      )) {
        let data = { date: `${key}`, recovered: `${value}` };
        recovered.push(data);
      }
      setCases([...getCases, ...cases]);
    }
  }, [currentHistory]);

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <div>
      {getCases.length > 0 && (
        <AreaChart
          width={500}
          height={400}
          data={(cases, deaths, recovered)}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='cases'
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
          />
          <Area
            type='monotone'
            dataKey='deaths'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
          />
          <Area
            type='monotone'
            dataKey='recovered'
            stackId='1'
            stroke='#ffc658'
            fill='#ffc658'
          />
        </AreaChart>
      )}
    </div>
  );
};

CurrentCountryStats.propTypes = {
  currentHistory: PropTypes.object
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(CurrentCountryStats);
