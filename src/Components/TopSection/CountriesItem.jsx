import React from 'react';
import { components } from 'react-select';
import PropTypes from 'prop-types';

const CountriesItem = ({ data, ...props }) => {
  return (
    <div>
      <components.Option {...props}>
        <img src={data.countryInfo.flag} className='flag' alt={data.country} />
        {data.country}
      </components.Option>
    </div>
  );
};

CountriesItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default CountriesItem;
