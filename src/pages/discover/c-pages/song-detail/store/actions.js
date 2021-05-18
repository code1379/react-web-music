import * as constants from './constants';
import * as services from '@/service/songDetail';
// 当改变 播放歌曲id 的时候，我还希望做其他事情
// TODO 0. 判断 playList 中是否已经包含数据是当前
// TODO 1. 获取歌曲的详情，播放歌曲连接直接拼接就好，不需要存储到redux 了
// TODO 2. 将歌曲详情添加到, playList 中


// ----- 分割线
const changeDisplayLyric = (displaySongLyric) => ({
  type: constants.CHANGE_DISPLAY_SONG_LYRIC,
  displaySongLyric
});
// 获取歌词信息
const getLyricByIdAction = (id) => {
  return (dispatch) => {
    services.getLyricById(id).then((res) => {
      const lyric = res.lrc.lyric;
      dispatch(changeDisplayLyric(lyric));
    });
  };
};
const changeDisplaySongDetail = (displaySongDetail) => ({
  type: constants.CHANGE_DISPLAY_SONG_DETAIL,
  displaySongDetail
})
// 获取单曲信息
export const getDisplaySongDetailByIdAction = (id) => {
  return dispatch => {
    // 获取歌曲详情
    services.getSongDetailById(id).then(res =>{
      // console.log(res)
      const displaySongDetail = res.songs[0];
      dispatch(changeDisplaySongDetail(displaySongDetail));
    })
    // 获取歌曲歌词
    dispatch(getLyricByIdAction(id));
  }
}
