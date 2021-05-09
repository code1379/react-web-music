import React, { memo } from 'react';

import { TopBarWrapper, Top, RightContet, SubMenu } from './style';

// 顶部导航数据
const headerLinks = [
  { title: '发现音乐' },
  { title: '我的音乐' },
  { title: '朋友' },
  { title: '商城' },
  { title: '音乐人' },
  { title: '下载客户端' }
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
            {headerLinks.map((item, index) => (
              <div className='nav-item' key={item.title}>
                {item.title}
              </div>
            ))}
          </nav>

          <RightContet>
            <div className='input-wrapper'>
              <i className='icon fas fa-search'></i>
              <input type="text" placeholder="音乐/视频/电台/用户"/>
            </div>

            <div className="creator-center">创作者中心</div>

            <div className="login">登录</div>
          </RightContet>
        </div>
      </Top>
      {/* 这里只展示要给 5px 高度的红线 */}
      <SubMenu></SubMenu>
    </TopBarWrapper>
  );
});
