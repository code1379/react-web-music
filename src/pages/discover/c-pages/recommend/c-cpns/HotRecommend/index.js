import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { getSizedImage, getReadNum } from '@/utils';

import CommonHeader from '@/components/CommonHeader';
import { HotRecommendWrapper, List } from './style';

export default memo(function HotRecommend() {
  const hotRecommends = useSelector((state) =>
    state.getIn(['recommend', 'hotRecommends'])
  );

  return (
    <HotRecommendWrapper>
      <CommonHeader title='热门推荐' />
      <List>
        {hotRecommends.slice(0, 8).map((item) => (
          <div className='item' key={item.id}>
            <div className='img-wrapper'>
              <img src={getSizedImage(item.picUrl, 140)} alt='' />
              <div className='msk coverall-spirit'></div>
              <div className='bottom coverall-spirit'>
                <div className='listen'>
                  <span className='icon headset iconall-spirit'></span>
                  <span>{getReadNum(item.playCount)}</span>
                </div>
                <span className='icon play iconall-spirit'></span>
              </div>
            </div>
            <div className='name'>{item.name}</div>
          </div>
        ))}
      </List>
    </HotRecommendWrapper>
  );
});
