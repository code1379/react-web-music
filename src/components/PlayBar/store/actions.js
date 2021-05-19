import * as constants from './constants';
// 当用户点击播放按钮时，我们做什么？
// 1. 派发changeCurrentDetail，判断当前 playlist 中是否包含
import * as services from '@/service/songDetail';

const changeCurrentSongId = (id) => ({
  type: constants.CHANGE_CURRENT_SONG_ID,
  id
});

const changeCurrentDetail = (songDetail) => ({
  type: constants.CHANGE_CURRENT_SONG_DETAIL,
  songDetail
});

const addSongDetailToPlayList = (songDetail) => ({
  type: constants.ADD_SONGDETAIL_TO_PLAY_LIST,
  songDetail
});

export const playAction = (id) => {
  return (dispatch, getState) => {
    // TODO 用户点击 id 之后，判断 是否在 playList 中
    const playList = getState().getIn(['playbar', 'playList']);
    console.log(playList);
    const currentSongId = getState().getIn(['playbar', 'currentSongId']);
    const audioRef = getState().getIn(['playbar', 'audioRef']);

    if(id === currentSongId) {
      audioRef.currentTime = 0
      return 
    }
    const index = playList.findIndex((item) => item.id === id);
    console.log(index);
    console.log(services);
    if (index === -1) {
      // 不存在与列表中
      // 去服务器获取数据
      services.getSongDetailById(id).then((res) => {
        const songDetail = res.songs[0];
        console.log(songDetail, res);
        dispatch(addSongDetailToPlayList(songDetail));
        dispatch(changeCurrentDetail(songDetail));
      });
      services.getLyricById(id).then((res) => {
        console.log(res);
      });
    } else {
      const songDetail = playList.find((item) => item.id === id);
      dispatch(changeCurrentDetail(songDetail));
    }
    dispatch(changeCurrentSongId(id));
  };
};

export const setAudioRefAction = (audioRef) => ({
  type: constants.SET_AUDIO_REF,
  audioRef
});
