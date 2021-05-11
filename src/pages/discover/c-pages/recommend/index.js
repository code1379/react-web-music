import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getBanner } from 'service/recommend';
import { actions } from './store';
// import CommonHeader from '@/components/CommonHeader';
import { RecommendWrapper, Content, RightContent, LeftContent } from './style';
import Swiper from './c-cpns/Swiper';
import HotRecommend from './c-cpns/HotRecommend'
import NewAlbum from './c-cpns/NewAlbum'
import Rank from './c-cpns/Rank'

export default memo(function Recommend() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBannersAction());
    dispatch(actions.getHotRecommendAction());
    dispatch(actions.getNewAlbumAction());
    dispatch(actions.getRankAction())
  }, [dispatch]);
  
  return (
    <RecommendWrapper style={{ minHeight: 800 }}>
      <Swiper />
      <Content className='wrap-v2'>
        <LeftContent>
          {/* <CommonHeader /> */}
          <HotRecommend/>
          <NewAlbum/>
          <Rank/>
        </LeftContent>
        <RightContent>r</RightContent>
      </Content>
    </RecommendWrapper>
  );
});
