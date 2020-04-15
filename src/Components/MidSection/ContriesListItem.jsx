import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ContriesListItem = ({
  country: {
    updated,
    country,
    countryInfo: { flag },
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    tests
  }
}) => {
  return (
    <div className='CountryListItem'>
      <div className='flagAndTitle'>
        <img src={flag} alt={country} />
        <p className='CountryName'>{country}</p>
      </div>

      <div className='CDR'>
        <div className='Cases'>
          <i className='fas fa-users'></i>
          {cases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          <span className='todayResults'>
            +{todayCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </span>
        </div>
        <div className='Deaths'>
          <i className='fas fa-skull-crossbones'></i>
          {deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          <span className='todayResults'>
            +{todayDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </span>
        </div>
        <div className='Recovered'>
          <i className='far fa-grin-beam-sweat'></i>
          {recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </div>
        <div className='Tests'>
          <i className='fas fa-syringe'></i>
          {tests.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        </div>
        <p className='lastUpdateList'>
          <i className='far fa-clock' />
          Last update:<span>{moment(updated).fromNow()}.</span>
        </p>
      </div>
    </div>
  );
};

ContriesListItem.propTypes = {
  props: PropTypes.object
};

export default ContriesListItem;
