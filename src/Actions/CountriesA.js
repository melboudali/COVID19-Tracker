import {
  GET_COUNTRIES,
  SET_CURRENT,
  GET_HiSTORY_CURRENT,
  SWAP_DATA,
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

export const swapingData = currentHistory =>  dispatch => {
  const cases = [];
  try {
    setLoading();
    for (let [key, value] of Object.entries(currentHistory.timeline.cases)) {
      cases.push({ date: key, cases: value });
    }
    //   for (let [key, value] of Object.entries(currentHistory.timeline.deaths)) {
    //     let data = { date: `${key}`, deaths: `${value}` };
    //     deaths.push(data);
    //     console.log('deaths: ', data);
    //   }
    //   for (let [key, value] of Object.entries(
    //     currentHistory.timeline.recovered
    //   )) {
    //     let data = { date: `${key}`, recovered: `${value}` };
    //     recovered.push(data);
    //     console.log('recovered: ', data);
    //   }
    //   if (cases.length > 0 && deaths.length > 0 && recovered.length > 0) {
    //     for (let c = 0; c <= cases.length; c++) {
    //       myDate.push({
    //         date: cases[c].date,
    //         cases: cases[c].cases,
    //         deaths: deaths[c].deaths,
    //         recovered: recovered[c].recovered
    //       });
    //     }
    // }
    if (cases.length > 0) dispatch({ type: SWAP_DATA, payload: cases });
  } catch (err) {
    dispatch({ type: COUNTRIES_ERROR, payload: err.message });
  }
};
export const setLoading = () => {
  return { type: SET_LOADING };
};
