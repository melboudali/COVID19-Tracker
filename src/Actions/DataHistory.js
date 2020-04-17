import {
  GET_HiSTORY_CURRENT_COUNTRY,
  SET_HiSTORY_CURRENT_COUNTRY_LOADING,
  SET_HiSTORY_CURRENT_COUNTRY_ERROR
} from './Types';

export const getCurrentHistory = country => async dispatch => {
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
    }
    dispatch({ type: GET_HiSTORY_CURRENT_COUNTRY, payload: await res.json() });
  } catch (err) {
    dispatch({ type: SET_HiSTORY_CURRENT_COUNTRY_ERROR, payload: err.message });
  }
};

export const setLoading = () => {
  return { type: SET_HiSTORY_CURRENT_COUNTRY_LOADING };
};
