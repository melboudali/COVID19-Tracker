import {
  GET_HiSTORY_CURRENT_COUNTRY,
  SET_HiSTORY_CURRENT_COUNTRY_LOADING,
  SET_HiSTORY_CURRENT_COUNTRY_ERROR
} from '../Actions/Types';

const initialState = {
  currentCountryHistory: null,
  currentCountryLoading: false,
  currentCountryError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HiSTORY_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountryHistory: action.payload,
        loading: false
      };

    case SET_HiSTORY_CURRENT_COUNTRY_LOADING:
      return { ...state, currentCountryLoading: true };

    case SET_HiSTORY_CURRENT_COUNTRY_ERROR:
      return { ...state, currentCountryError: action.payload, loading: false };

    default:
      return state;
  }
};
