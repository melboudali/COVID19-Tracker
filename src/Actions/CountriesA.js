import {
  GET_COUNTRIES,
  SET_CURRENT,
  GET_HiSTORY_CURRENT,
  SET_LOADING,
  COUNTRIES_ERROR
} from './Types';

// Get All Countries
export const getCountries = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('https://corona.lmao.ninja/v2/countries');
    if (!res.ok) {
      dispatch({
        type: COUNTRIES_ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    }
    const data = await res.json();
    const sortedCountriesByCases = [...data].sort((a, b) => {
      return b.cases - a.cases;
    });
    dispatch({
      type: GET_COUNTRIES,
      payload: { allCountries: data, sortedCountriesByCases }
    });
  } catch (err) {
    dispatch({ type: COUNTRIES_ERROR, payload: err.message });
  }
};

export const setCurrent = country => {
  setLoading();
  return { type: SET_CURRENT, payload: country };
};

export const getHistoryCurrent = country => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `https://corona.lmao.ninja/v2/historical/${country}`
    );
    if (!res.ok) {
      dispatch({
        type: COUNTRIES_ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    }
    dispatch({ type: GET_HiSTORY_CURRENT, payload: await res.json() });
  } catch (err) {
    console.log(err);
    dispatch({ type: COUNTRIES_ERROR, payload: err.message });
  }
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
