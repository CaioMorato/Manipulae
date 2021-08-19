import axios from 'axios';
export const CURRENT_SONG = 'CURRENT_SONG';
export const SEARCH_SONGS_LOADING = 'SEARCH_SONGS_LOADING';
export const SEARCH_SONGS_SUCCESS = 'SEARCH_SONGS_SUCCESS';
export const SEARCH_SONGS_FAILED = 'SEARCH_SONGS_FAILED';

export const saveCurrentSong = (payload) => ({
  type: CURRENT_SONG,
  payload,
});

export const getSearchMusics = () => ({
  type: SEARCH_SONGS_LOADING,
});

export const saveSearchMusics = (payload) => ({
  type: SEARCH_SONGS_SUCCESS,
  payload,
});

export const errorFetching = (payload) => ({
  type: SEARCH_SONGS_FAILED,
  payload,
});

export const fetchAPIWithQuery = (query) => {
  return async (dispatch) => {
    dispatch(getSearchMusics());
    try {
      const requestMusic = await axios.get(`/search?q=${query}`);
      console.log(query);
      dispatch(saveSearchMusics(requestMusic));
    } catch (error) {
      dispatch(errorFetching(error));
    }
  };
};
