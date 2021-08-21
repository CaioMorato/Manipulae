import axios from 'axios';

export const CURRENT_SONG = 'CURRENT_SONG';
export const SEARCH_SONGS_LOADING = 'SEARCH_SONGS_LOADING';
export const SEARCH_SONGS_SUCCESS = 'SEARCH_SONGS_SUCCESS';
export const SEARCH_SONGS_FAILED = 'SEARCH_SONGS_FAILED';
export const FAVORITE_SONG = 'FAVORITE_SONG';
export const RESET_FAVORITES = 'RESET_FAVORITES';

export const saveCurrentSong = (payload) => ({
  type: CURRENT_SONG,
  payload,
});

export const getSearchMusics = () => ({
  type: SEARCH_SONGS_LOADING,
});

export const saveSearchMusics = (payload, quantity, query) => ({
  type: SEARCH_SONGS_SUCCESS,
  payload,
  quantity,
  query,
});

export const errorFetching = (payload) => ({
  type: SEARCH_SONGS_FAILED,
  payload,
});

export const fetchAPIWithQuery = (payload) => {
  return async (dispatch) => {
    dispatch(getSearchMusics());
    try {
      const requestMusic = await axios.get(`/search?q=${payload.query}&index=${payload.quantity}`);
      dispatch(saveSearchMusics(requestMusic, payload.quantity, payload.query));
    } catch (error) {
      dispatch(errorFetching(error));
    }
  };
};

export const makeFavorite = (payload) => ({
  type: FAVORITE_SONG,
  payload,
});

export const resetFavorites = (payload) => ({
  type: RESET_FAVORITES,
  payload,
});
