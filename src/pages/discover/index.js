import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom'
import { DiscoverPageWrapper, TopNav } from './style';

export const discoverMenu = [
  {
    id: 1,
    to: '/discover/recommend',
    title: '推荐'
  },
  {
    id: 2,
    to: '/discover/rank',
    title: '排行榜'
  },
  {
    id: 3,
    to: '/discover/songs',
    title: '歌单'
  },
  {
    id: 4,
    to: '/discover/anchor',
    title: '主播电台'
  },
  {
    id: 5,
    to: '/discover/singer',
    title: '歌手'
  },
  {
    id: 6,
    to: '/discover/album',
    title: '新碟上架'
  }
];

export default memo(function Discover({ route }) {
  return (
    <DiscoverPageWrapper>
      <TopNav>
        <div className='content wrap-v1'>{discoverMenu.map(item => (
          <NavLink key={item.id} to={item.to} className="nav-item">
            {item.title}
          </NavLink>
        ))}</div>
      </TopNav>
      {renderRoutes(route.routes)}
    </DiscoverPageWrapper>
  );
});
