import React, { memo } from 'react';

import { HeaderWrapper } from './style';

// const navs = [
//   { title: '华语', link: '' },
//   { title: '流行', link: '' },
//   { title: '摇滚', link: '' },
//   { title: '民谣', link: '' },
//   { title: '电子', link: '' }
// ];

export default memo(function CommonHeader(props) {
  const { title = '热门推荐', navs = [] } = props;
  return (
    <HeaderWrapper>
      <div className='left'>
        <div className='circle index-spirit'></div>
        <div className='title'>{title}</div>
        <div className='nav'>
          {navs.map((nav) => (
            <div className='nav-item' key={nav.title}>
              {nav.title}
            </div>
          ))}
        </div>
      </div>
      <div className='right'>
        更多 <span className='arrow index-spirit'></span>
      </div>
    </HeaderWrapper>
  );
});
