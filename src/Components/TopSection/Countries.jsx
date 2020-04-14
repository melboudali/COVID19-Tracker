import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

const Countries = () => {
  const [, setInputValue] = useState('');

  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const filterColors = inputValue => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue({ inputValue });
    return inputValue;
  };

  return (
    <div className='countriesSection'>
      <div className='countriesDopdown'>
        <AsyncSelect
          placeholder="Search or Select Countrie ..."
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          className='searchBox'
        />
      </div>
    </div>
  );
};

export default Countries;
