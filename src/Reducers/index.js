import { combineReducers } from 'redux';
import AllCountries from './Countries';
import CurrentCountryData from './CurrentCountry';
import DataHistory from './DataHistory';

export default combineReducers({
  AllCountries,
  CurrentCountryData,
  DataHistory
});
