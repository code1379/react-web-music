import request from './request';

export const getBanner = () => {
  return request.get('/banner');
};
