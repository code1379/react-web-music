import * as constants from './constants';
import * as services from '@/service/recommend';

const changeBannerAction = (banners) => ({
  type: constants.CHANGE_BANNERS,
  banners
});

export const getBannersAction = () => {
  return (dispatch) => {
    services.getBanner().then((res) => {
      dispatch(changeBannerAction(res.banners));
    });
  };
};

const changeHotRecommendAction = (recommends) => ({
  type: constants.CHANGE_HOT_RECOMMEND,
  recommends
});

export const getHotRecommendAction = () => {
  return (dispatch) => {
    services.getHotRecommend().then((res) => {
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};

const changeNewAlbumAction = (albums) => ({
  type: constants.CHANGE_NEW_ALBUM,
  albums
});

export const getNewAlbumAction = () => {
  return (dispatch) => {
    services.getNewAlbum(0, 10).then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
  };
};

// 所有榜单 api 中找到要用的榜单的 id， 飙升 19723756、新歌 3779629、原创 2884035
const rankIdList = [19723756, 3779629, 2884035];

const changeRankListAction = (rankList) => ({
  type: constants.CHANGE_RANK_LIST,
  rankList
});

export const getRankAction = () => {
  return (dispatch) => {
    const rankList = [];
    // 飙升榜
    Promise.all(rankIdList.map((id) => services.getRankById(id))).then(([a, b, c]) => {
      rankList.push(a.playlist, b.playlist, c.playlist);
      dispatch(changeRankListAction(rankList));
    });
  };
};

// 歌手榜
const changeHotSingersAction = (hotSingers) => ({
  type: constants.CHANGE_HOT_SINGER,
  hotSingers
});

export const getHotSingersByIdAction = (id) => {
  return (dispatch) => {
    services.getHotSingersById(id).then((res) => {
      console.log(res);
      dispatch(changeHotSingersAction(res.list.artists));
    });
  };
};

// 热门主播
const changeHotAnchors = (hotAnchors) => ({
  type: constants.CHANGE_HOT_ANCHOR,
  hotAnchors
});
export const getHotAnchorsAction = (limit) => {
  return (dispatch) => {
    services.getHotAnchers(limit).then((res) => {
      dispatch(changeHotAnchors(res.data.list));
    });
  };
};
