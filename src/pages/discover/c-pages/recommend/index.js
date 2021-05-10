import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getBanner } from 'service/recommend';
import { actions } from './store';

import { RecommendWrapper } from './style';
import Swiper from './c-cpns/Swiper'

export default memo(function Recommend() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBannersAction());
  }, [dispatch]);
  return (
    <RecommendWrapper style={{ minHeight: 800 }}>

      <Swiper/>
    </RecommendWrapper>
  );
});
