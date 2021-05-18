import { Map } from 'immutable';
import * as constants from './constants'
const defaultState = Map({
  currentSongId: -1,
  playList: [],
  displaySongDetail: {},
  displaySongLyric: "",
  url: ''
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DISPLAY_SONG_DETAIL:
      return state.set('displaySongDetail', action.displaySongDetail);
    case constants.CHANGE_DISPLAY_SONG_LYRIC: 
      return state.set('displaySongLyric', action.displaySongLyric);
    case constants.CHANGE_CURRENT_SONG_ID:
      return state.set('currentSongId', action.songId);
    case constants.ADD_TO_PLAYLIST:
      const playList = state.get("playList")
      return state.set('playList', [...playList, action.songDetail])
    case constants.CHANGE_CURRENT_SONG_DETAIL:
      return state.set("songDetail", action.songDetail)
    default: 
      return state
  }
};

export default reducer;
