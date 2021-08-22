import { CURRENT_SONG, SEARCH_SONGS_LOADING, SEARCH_SONGS_SUCCESS, SEARCH_SONGS_FAILED, FAVORITE_SONG, RESET_FAVORITES, PAGE_CHANGE } from '../actions/changeSongsActions';

const INITIAL_USER_STATE = {
  showChart: true,
  loading: false,
  search_songs: {},
  quantity: 0,
  query: '',
  music_preview: {
    duration: 0,
    album: {
      cover_small: 'https://i.pinimg.com/736x/3f/97/38/3f973871057b3f076e38f5c1413b06e6.jpg',
    },
  },
  favorites: [],
  error: {},
};

const musicReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return {
        ...state,
        music_preview: action.payload,
      };
    case SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        search_songs: action.payload,
        query: action.query,
        loading: false,
        showChart: false,
        headers: action.payload.headers,
      };
    case SEARCH_SONGS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SONGS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case FAVORITE_SONG:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case RESET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case PAGE_CHANGE:
      return {
        ...state,
        quantity: (action.payload - 1) * 25,
      };
    default:
      return state;
  }
};

export default musicReducer;
