import { Map } from 'immutable';
import * as constants from './constants';

let playList =  JSON.parse(localStorage.getItem("playList")) || [];

const defaultState = Map({
  currentSongId: (playList.length && playList[0].id) || -1,
  playList: playList,
  currentSongDetail: (playList.length && playList[0]) || {},
  audioRef: null,
  // 0 顺序播放 1 随机播放 2 单曲播放
  pattern: 0
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_AUDIO_REF:
      return state.set('audioRef', action.audioRef);
    case constants.CHANGE_CURRENT_SONG_ID:
      return state.set('currentSongId', action.id);
    case constants.CHANGE_CURRENT_SONG_DETAIL:
      return state.set('currentSongDetail', action.songDetail);
    case constants.ADD_SONGDETAIL_TO_PLAY_LIST:
      const playList = state.get("playList")
      const newList = [...playList, action.songDetail];
      localStorage.setItem("playList", JSON.stringify(newList))
      return state.set('playList', newList);
    default:
      return state;
  }
};

export default reducer;
