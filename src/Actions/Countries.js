import {
  GET_ALL_COUNTRIES,
  GET_WWStats,
  SET_ALL_COUNTRIES_LOADING,
  ERROR
} from './Types';

export const getAllCountries = () => async dispatch => {
  setLoading();
  try {
    const res = await fetch('https://corona.lmao.ninja/v2/countries');
    if (!res.ok) {
      dispatch({
        type: ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    }
    const data = await res.json();
    const sortedCountriesByCases = [...data].sort((a, b) => {
      return b.cases - a.cases;
    });
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: { allCountries: data, sortedCountriesByCases }
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.message });
  }
};

export const WWStatsFetch = () => async dispatch => {
  setLoading();
  try {
    const res = await fetch('https://corona.lmao.ninja/v2/all');
    dispatch({ type: GET_WWStats, payload: await res.json() });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.message });
  }
};

export const setLoading = () => {
  return { type: SET_ALL_COUNTRIES_LOADING };
};
