import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getBanner } from 'service/recommend';
import { actions } from './store';
// import CommonHeader from '@/components/CommonHeader';
import { RecommendWrapper, Content, RightContent, LeftContent } from './style';
import Swiper from './c-cpns/Swiper';
import HotRecommend from './c-cpns/HotRecommend'

export default memo(function Recommend() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBannersAction());
    dispatch(actions.getHotRecommendAction());
  }, [dispatch]);
  
  return (
    <RecommendWrapper style={{ minHeight: 800 }}>
      <Swiper />
      <Content className='wrap-v2'>
        <LeftContent>
          {/* <CommonHeader /> */}
          <HotRecommend/>
        </LeftContent>
        <RightContent>r</RightContent>
      </Content>
    </RecommendWrapper>
  );
});
