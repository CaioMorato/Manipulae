import { CURRENT_SONG } from '../actions';

const INITIAL_USER_STATE = {
  current_song_cover: 'https://www.kindpng.com/picc/m/130-1306421_vinyl-record-png-vinyl-png-transparent-png.png',
};

const musicReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return {
        ...state,
        current_song_cover: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
