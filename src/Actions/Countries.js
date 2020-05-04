import {
  GET_ALL_COUNTRIES,
  GET_WWStats,
  SET_ALL_COUNTRIES_LOADING,
  ERROR
} from './Types';

let baseUrl;
process.env.NODE_ENV
  ? (baseUrl = process.env.REACT_APP_BASE_URL)
  : (baseUrl = process.env.BASE_URL);

export const getAllCountries = () => async dispatch => {
  setLoading();
  try {
    const res = await fetch(`${baseUrl}v2/countries`);
    if (!res.ok) {
      dispatch({
        type: ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    }
    const data = await res.json();
    const dataFiltered = data.filter(data => data.country !== 'Western Sahara');
    const sortedCountriesByCases = [...dataFiltered].sort((a, b) => {
      return b.cases - a.cases;
    });
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: { allCountries: dataFiltered, sortedCountriesByCases }
    });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.message });
  }
};

export const WWStatsFetch = () => async dispatch => {
  setLoading();
  try {
    const res = await fetch(`${baseUrl}v2/all`);
    dispatch({ type: GET_WWStats, payload: await res.json() });
  } catch (err) {
    dispatch({ type: ERROR, payload: err.message });
  }
};

export const setLoading = () => {
  return { type: SET_ALL_COUNTRIES_LOADING };
};
