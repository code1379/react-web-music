import React, { memo } from 'react';

import CommonHeader from '@/components/CommonHeader';
import { RankWrapper, Content } from './style';
import { useSelector } from 'react-redux';
import { getSizedImage } from '../../../../../../utils';

export default memo(function Rank() {
  const rankList = useSelector((state) => state.getIn(['recommend', 'rankList']));
  return (
    <RankWrapper>
      <CommonHeader title='榜单' />
      <Content>
        {rankList.map((item) => (
          <div className='bill' key={item.name}>
            {/* 头部 */}
            <div className='bill-info'>
              <div className='img-wrapper'>
                <img src={getSizedImage(item.coverImgUrl, 80)} alt='' />
              </div>
              <div className='bar'>
                <div className='name'>{item.name}</div>
                <div className='controller'>
                  <div className='btn play index-spirit'></div>
                  <div className='btn save index-spirit'></div>
                </div>
              </div>
            </div>
            {/* 列表 */}
            <ul className='tracks'>
              {item.tracks.slice(0, 10).map((track, index) => (
                <li className='track' key={track.name}>
                  <div className="left">
                    <span className={index < 3 ? 'index top' : 'index'}>{index + 1}</span>
                    <div className='name text-nowrap'>{track.name}</div>
                  </div>
                  <div className='controller-wrapper'>
                    <div className='controller'>
                      <div className='btn index-spirit play'></div>
                      <div className='btn icon-spirit add'></div>
                      <div className='btn index-spirit save'></div>
                    </div>
                  </div>
                </li>
              ))}
              <li className='more'>查看更多&gt;</li>
            </ul>
          </div>
        ))}
      </Content>
    </RankWrapper>
  );
});
