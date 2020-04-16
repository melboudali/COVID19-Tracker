import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import PropTypes from 'prop-types';

const CurrentCountryStats = ({
  countriesData: { currentHistory, loading }
}) => {
  let myDate = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  const [getCases, setCases] = useState([]);

  const swapData = () => {
    for (let [key, value] of Object.entries(currentHistory.timeline.cases)) {
      let data = { date: `Day: ${key}`, Cases: `${value}` };
      cases.push(data);
    }
    for (let [key, value] of Object.entries(currentHistory.timeline.deaths)) {
      let data = { date: `Day: ${key}`, Deaths: `${value}` };
      deaths.push(data);
    }
    for (let [key, value] of Object.entries(
      currentHistory.timeline.recovered
    )) {
      let data = { date: `Day: ${key}`, Recovered: `${value}` };
      recovered.push(data);
    }
    if (cases.length > 0 && deaths.length > 0 && recovered.length > 0) {
      for (let c = 0; c < cases.length; c++) {
        myDate.push({
          date: cases[c].date,
          Cases: cases[c].Cases,
          Deaths: deaths[c].Deaths,
          Recovered: recovered[c].Recovered
        });
      }
      setCases([...getCases, ...myDate]);
    }
  };

  useEffect(() => {
    if (currentHistory !== null && !loading) {
      swapData();
    }
    // eslint-disable-next-line
  }, [currentHistory, loading]);

  return (
    <div>
      {getCases.length === 0 || loading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            data={getCases}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='Recovered'
              stackId='1'
              stroke='#388E3C'
              fill='#4CAF50'
              fillOpacity={1}
            />
            <Area
              type='monotone'
              dataKey='Deaths'
              stackId='1'
              stroke='#9c2c2c'
              fill='#E44E4E'
              fillOpacity={1}
            />
            <Area
              type='monotone'
              dataKey='Cases'
              stackId='1'
              stroke='#A3320B'
              fill='#E6AF2E'
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
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
