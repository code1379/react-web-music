import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getBanner } from 'service/recommend';
import { actions } from './store';
// import CommonHeader from '@/components/CommonHeader';
import { RecommendWrapper, Content, RightContent, LeftContent } from './style';
import Swiper from './c-cpns/Swiper';
// 左侧
import HotRecommend from './c-cpns/HotRecommend';
import NewAlbum from './c-cpns/NewAlbum';
import Rank from './c-cpns/Rank';

// 右侧
import UserLogin from './c-cpns/UserLogin';
import SettleSinger from './c-cpns/SettleSinger';
import HotAnchor from './c-cpns/HotAnchor';

export default memo(function Recommend() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBannersAction());
    dispatch(actions.getHotRecommendAction());
    dispatch(actions.getNewAlbumAction());
    dispatch(actions.getRankAction());
    dispatch(actions.getHotSingersByIdAction());
    dispatch(actions.getHotAnchorsAction());
  }, [dispatch]);

  return (
    <RecommendWrapper style={{ minHeight: 800 }}>
      <Swiper />
      <Content className='wrap-v2'>
        <LeftContent>
          {/* <CommonHeader /> */}
          <HotRecommend />
          <NewAlbum />
          <Rank />
        </LeftContent>
        <RightContent>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RightContent>
      </Content>
    </RecommendWrapper>
  );
});
