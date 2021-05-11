import * as constants from './constants';
import { getBanner, getHotRecommend, getNewAlbum } from '@/service/recommend';

const changeBannerAction = (banners) => ({
  type: constants.CHANGE_BANNERS,
  banners
});

export const getBannersAction = () => {
  return (dispatch) => {
    getBanner().then((res) => {
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
    getHotRecommend().then((res) => {
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
    getNewAlbum(0, 10).then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
  };
};
