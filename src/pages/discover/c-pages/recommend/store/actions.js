import * as constants from './constants';
import { getBanner } from '@/service/recommend';

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
