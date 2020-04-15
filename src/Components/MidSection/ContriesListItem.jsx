import React from 'react';
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
      <img src={flag} alt={country} />
      {country}
    </div>
  );
};

ContriesListItem.propTypes = {
  props: PropTypes.object
};

export default ContriesListItem;
