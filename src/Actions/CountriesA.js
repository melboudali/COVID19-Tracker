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
    dispatch({ type: GET_COUNTRIES, payload: await res.json() });
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
    dispatch({ type: GET_HiSTORY_CURRENT, payload: await res.json() });
  } catch (err) {
    dispatch({ type: COUNTRIES_ERROR, payload: err.message });
  }
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
