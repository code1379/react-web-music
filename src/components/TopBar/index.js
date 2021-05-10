import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { TopBarWrapper, Top, RightContet, SubMenu } from './style';

// 顶部导航数据
export const headerLinks = [
  { title: '发现音乐', link: '/discover' },
  { title: '我的音乐', link: '/mine' },
  { title: '朋友', link: '/friend' },
  { title: '商城', link: 'https://music.163.com/store/product' },
  { title: '音乐人', link: 'https://music.163.com/st/musician' },
  { title: '下载客户端', link: '/download' }
];

export default memo(function TopBar() {
  return (
    <TopBarWrapper>
      <Top>
        <div className='wrap-v1'>
          {/* Logo */}
          <h1 className='logo topbar-spirit'>
            <a href='/#'>网抑云音乐</a>
          </h1>
          {/* 需要遍历循环，那么我们就需要有本地数据 */}
          {/* 
            创建 common 目录，将数据放到 local-data.js  headerLinks。
            我这里为了方便，先写在组件中
          */}
          <nav className='top-nav'>
            {headerLinks.map((item, index) => {
              if (item.link.indexOf("http") === -1) {
                return (
                  <NavLink
                    to={item.link}
                    className='nav-item'
                    key={item.title}
                  >
                    {item.title}
                  </NavLink>
                );
              } else {
                return (
                  <a
                    href={item.link}
                    target='_blank'
                    className='nav-item'
                    key={item.title}
                    rel='noreferrer'
                  >
                    {item.title}
                  </a>
                );
              }
            })}
          </nav>

          <RightContet>
            <div className='input-wrapper'>
              <i className='icon fas fa-search'></i>
              <input type='text' placeholder='音乐/视频/电台/用户' />
            </div>

            <div className='creator-center'>创作者中心</div>

            <div className='login'>登录</div>
          </RightContet>
        </div>
      </Top>
      {/* 这里只展示要给 5px 高度的红线 */}
      <SubMenu></SubMenu>
    </TopBarWrapper>
  );
});
