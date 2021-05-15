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

//
export const getRankById = (id) => {
  return request.get('/top/list', {
    params: {
      id
    }
  });
};

// 获取热门歌手（入驻歌手信息找不到）

export const getHotSingersById = (id = 1) => {
  return request.get('/toplist/artist', {
    params: {
      id
    }
  });
};

// 获取热门主播
export const getHotAnchers = (limit = 30) => {
  return request.get('/dj/toplist/popular', {
    params: { limit }
  });
};


