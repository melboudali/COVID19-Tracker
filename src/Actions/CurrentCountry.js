import {
  SET_CURRENT_COUNTRY,
  SET_CURRENT_COUNTRY_LOADING,
  SET_CURRENT_COUNTRY_ERROR
} from './Types';

export const setCurrentCountry = country => {
  setLoading();
  return { type: SET_CURRENT_COUNTRY, payload: country };
};

export const setLoading = () => {
  return { type: SET_CURRENT_COUNTRY_LOADING };
};
