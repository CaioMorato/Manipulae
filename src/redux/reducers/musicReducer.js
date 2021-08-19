import { CURRENT_SONG, SEARCH_SONGS_LOADING, SEARCH_SONGS_SUCCESS, SEARCH_SONGS_FAILED } from '../actions/changeSongsActions';

const INITIAL_USER_STATE = {
  showChart: true,
  loading: false,
  search_songs: {},
  quantity: 0,
  query: '',
  current_song: '',
  current_song_cover: 'https://www.kindpng.com/picc/m/130-1306421_vinyl-record-png-vinyl-png-transparent-png.png',
  error: {},
};

const musicReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return {
        ...state,
        current_song: action.payload.current_song,
        current_song_cover: action.payload.current_song_cover,
      };
    case SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        search_songs: action.payload,
        quantity: Number(state.quantity) + 25,
        query: action.query,
        loading: false,
        showChart: false,
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
    default:
      return state;
  }
};

export default musicReducer;
