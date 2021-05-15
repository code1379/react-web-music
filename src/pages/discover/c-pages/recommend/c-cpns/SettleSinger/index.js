import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getSizedImage } from '../../../../../../utils';
import { SettleSingerWrapper, HeaderWrapper } from './style';

export default memo(function SettleSinger() {
  const hotSingers = useSelector((state) => state.getIn(['recommend', 'hotSingers']));
  return (
    <SettleSingerWrapper>
      <HeaderWrapper>
        <div className='title'>入驻歌手</div>
        <p>查看全部&gt;</p>
      </HeaderWrapper>
      <div className='singer-list'>
        {hotSingers.slice(0, 5).map((singer) => (
          <div className='singer' key={singer.id}>
            <img src={getSizedImage(singer.picUrl, 62)} alt='' />
            <div className='info'>
              <div className='name'>{singer.name}</div>
              <div className='tag'>{singer.alias[0] ? singer.alias[0] : singer.name}</div>
            </div>
          </div>
        ))}
      </div>
    </SettleSingerWrapper>
  );
});
