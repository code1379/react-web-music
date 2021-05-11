import request from './request';

// 首页轮播图
export const getBanner = () => {
  return request.get('/banner');
};

// 推荐歌单 首页推荐页面 热门推荐
export const getHotRecommend = () => {
  return request.get('/personalized');
};

// 新碟
export const getNewAlbum = (offset, limit) => {
  return request.get('/top/album', {
    params: {
      offset,
      limit
    }
  });
};
