export const CURRENT_SONG = 'CURRENT_SONG';

export const saveCurrentSong = (payload) => ({
  type: CURRENT_SONG,
  payload,
});
