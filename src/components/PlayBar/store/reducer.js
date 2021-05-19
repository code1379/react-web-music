import { Map } from 'immutable';
import * as constants from './constants';

let playList = JSON.parse(localStorage.getItem('playList')) || [];
let currentSongId = localStorage.getItem('currentSongId') || -1;
let currentSongDetail = playList.find((item) => item.id == currentSongId) || {};
let lyric = JSON.parse(localStorage.getItem('lyric')) || "";

const defaultState = Map({
  currentSongId: currentSongId,
  playList: playList,
  currentSongDetail: currentSongDetail,
  audioRef: null,
  // 0 顺序播放 1 随机播放 2 单曲播放
  pattern: 0,
  lyric: lyric
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_AUDIO_REF:
      return state.set('audioRef', action.audioRef);
    case constants.CHANGE_CURRENT_SONG_ID:
      localStorage.setItem('currentSongId', action.id);
      return state.set('currentSongId', action.id);
    case constants.CHANGE_CURRENT_SONG_DETAIL:
      return state.set('currentSongDetail', action.songDetail);
    case constants.ADD_SONGDETAIL_TO_PLAY_LIST:
      const playList = state.get('playList');
      const newList = [...playList, action.songDetail];
      localStorage.setItem('playList', JSON.stringify(newList));
      return state.set('playList', newList);
    case constants.CHANGE_LYRIC:
      localStorage.setItem('lyric', JSON.stringify(action.lyric));
      return state.set('lyric', action.lyric);
    default:
      return state;
  }
};

export default reducer;
