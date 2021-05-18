import request from './request';

export const getSongDetailById = (id) => {
  return request.get(`/song/detail?ids=${id}`);
};

export const getLyricById = (id) => {
  return request.get("/lyric", {
    params: {
      id
    }
  })
}