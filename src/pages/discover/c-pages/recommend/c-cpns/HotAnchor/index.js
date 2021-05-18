import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSizedImage } from '../../../../../../utils';
import { HotAnchorWrapper, HeaderWrapper } from './style';

export default memo(function HotAnchor() {
  const anchors = useSelector((state) => state.getIn(['recommend', 'hotAnchors']));
  return (
    <HotAnchorWrapper>
      <HeaderWrapper>
        <div className='title'>热门主播</div>
      </HeaderWrapper>
      <div className='dj-list'>
        {anchors.slice(0, 5).map((dj, index) => (
          <div className='dj' key={index}>
            <img src={getSizedImage(dj.avatarUrl, 40)} alt='' />
            <div className='info'>
              <div className='name'>{dj.nickName}</div>
            </div>
          </div>
        ))}
      </div>
    </HotAnchorWrapper>
  );
});
