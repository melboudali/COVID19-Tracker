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
  },
  id
}) => {
  return (
    <div className='CountryListItem'>
      <div className='flagAndTitle'>
        <img src={flag} alt={country} />
        <p className='CountryName'>{country}</p>
      </div>

      <div className='cases'>
        <p>
          <i className='fas fa-users'></i> {cases}+{todayCases} |
          <i className='fas fa-skull-crossbones'></i>
          {deaths}+{todayDeaths} | <i className='far fa-grin-beam-sweat'></i>
          {recovered} | <i className='fas fa-syringe'></i>
          {tests}
        </p>
        <p className='lastUpdate'>
          <i className='far fa-clock' />
          Last update:
          <span>{moment(updated).fromNow()}.</span>
        </p>
      </div>
    </div>
  );
};

ContriesListItem.propTypes = {
  props: PropTypes.object
};

export default ContriesListItem;
