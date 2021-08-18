import axios from 'axios';
export const TOP_10 = 'TOP_10';
export const SET_LOADING = 'SET_LOADING';
export const FETCH_ERROR = 'FETCH_ERROR';

export const saveTopListened = (payload) => ({
  type: TOP_10,
  payload,
});

export const getMusics = () => ({
  type: SET_LOADING,
});

export const errorFetching = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

export const fetchAPI = () => {
  return async (dispatch) => {
    dispatch(getMusics());
    try {
      const requestMusic = await axios.get('/chart');
      // const apiJSON = await requestMusic.json()
      console.log(requestMusic.data.tracks);
      dispatch(saveTopListened(requestMusic.data.tracks));
    } catch (error) {
      dispatch(errorFetching(error));
    }
  };
};
