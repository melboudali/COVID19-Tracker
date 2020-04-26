import {
  GET_HiSTORY_CURRENT_COUNTRY,
  GET_WW_DATA_HISTORY,
  CLEAR_CURRENT_COUNTRY,
  SET_HiSTORY_CURRENT_COUNTRY_LOADING,
  SET_HiSTORY_CURRENT_COUNTRY_ERROR
} from './Types';

export const getCurrentHistory = country => async dispatch => {
  let Dates = [];
  let Cases = [];
  let Deaths = [];
  let Recovered = [];

  try {
    setLoading();
    const res = await fetch(
      `https://corona.lmao.ninja/v2/historical/${country}`
    );
    if (!res.ok) {
      dispatch({
        type: SET_HiSTORY_CURRENT_COUNTRY_ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    } else {
      const Data = await res.json();
      for (let [key, value] of Object.entries(Data.timeline.cases)) {
        let newDate = key.split('/');
        Dates.push(`${newDate[1]}/${newDate[0]}`);
        Cases.push(value);
      }
      for (let [key, value] of Object.entries(Data.timeline.deaths)) {
        Deaths.push(value);
      }
      for (let [key, value] of Object.entries(Data.timeline.recovered)) {
        Recovered.push(value);
      }
      if (
        Dates.length > 0 &&
        Cases.length > 0 &&
        Deaths.length > 0 &&
        Recovered.length > 0
      ) {
        dispatch({
          type: GET_HiSTORY_CURRENT_COUNTRY,
          payload: { Data, Dates, Cases, Deaths, Recovered }
        });
      }
    }
  } catch (err) {
    dispatch({ type: SET_HiSTORY_CURRENT_COUNTRY_ERROR, payload: err.message });
  }
};

export const getWWHistory = () => async dispatch => {
  let Dates = [];
  let Cases = [];
  let Deaths = [];
  let Recovered = [];
  try {
    setLoading();
    const res = await fetch('https://corona.lmao.ninja/v2/historical/all');
    if (!res.ok) {
      dispatch({
        type: SET_HiSTORY_CURRENT_COUNTRY_ERROR,
        payload: `HTTP Status: ${res.status}`
      });
      throw new Error(`HTTP Status: ${res.status}`);
    } else {
      const Data = await res.json();
      for (let [key, value] of Object.entries(Data.cases)) {
        let newDate = key.split('/');
        Dates.push(`${newDate[1]}/${newDate[0]}`);
        Cases.push(value);
      }
      for (let [key, value] of Object.entries(Data.deaths)) {
        Deaths.push(value);
      }
      for (let [key, value] of Object.entries(Data.recovered)) {
        Recovered.push(value);
      }
      if (
        Dates.length > 0 &&
        Cases.length > 0 &&
        Deaths.length > 0 &&
        Recovered.length > 0
      ) {
        dispatch({
          type: GET_WW_DATA_HISTORY,
          payload: { Data, Dates, Cases, Deaths, Recovered }
        });
      }
    }
  } catch (err) {
    dispatch({ type: SET_HiSTORY_CURRENT_COUNTRY_ERROR, payload: err.message });
  }
};

export const clearCurrentHistory = () => {
  return { type: CLEAR_CURRENT_COUNTRY };
};

export const setLoading = () => {
  return { type: SET_HiSTORY_CURRENT_COUNTRY_LOADING };
};
