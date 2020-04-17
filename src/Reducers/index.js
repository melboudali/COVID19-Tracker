import { combineReducers } from 'redux';
import AllCountries from './Countries';
import CurrentCountryData from './CurrentCountry';
import DateHistory from './DataHistory';

export default combineReducers({
  AllCountries,
  CurrentCountryData,
  DateHistory
});
