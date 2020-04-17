import {
  GET_ALL_COUNTRIES,
  SET_ALL_COUNTRIES_LOADING,
  ERROR
} from '../Actions/Types';

const initialState = {
  allCountriesData: null,
  allCountriesSortedByCases: null,
  allCountriesloading: false,
  allCountriesError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountriesData: action.payload.allCountries,
        allCountriesSortedByCases: action.payload.sortedCountriesByCases,
        allCountriesloading: false
      };

    case SET_ALL_COUNTRIES_LOADING:
      return { ...state, allCountriesloading: true };

    case ERROR:
      return {
        ...state,
        allCountriesError: action.payload,
        allCountriesloading: false
      };

    default:
      return state;
  }
};
