import {
  SET_CURRENT_COUNTRY,
  SET_CURRENT_COUNTRY_LOADING,
  SET_CURRENT_COUNTRY_ERROR
} from '../Actions/Types';

const initialState = {
  currentCountry: null,
  currentCountryLoading: false,
  currentCountryError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountry: action.payload,
        currentCountryLoading: false
      };

    case SET_CURRENT_COUNTRY_LOADING:
      return { ...state, currentCountryLoading: true };

    case SET_CURRENT_COUNTRY_ERROR:
      return {
        ...state,
        currentCountryError: action.payload,
        currentCountryLoading: false
      };

    default:
      return state;
  }
};
