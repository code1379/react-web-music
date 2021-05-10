import React, { memo, useRef, useState } from 'react';

import { Carousel } from 'antd';
import { SwiperWrapper, Content, Download } from './style';
import { useSelector } from 'react-redux';

export default memo(function Swiper() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  // redux
  const banners = useSelector((state) => state.getIn(['recommend', 'banners']));
  // func
  const handleBeforeChange = (from, to) => {
    setCurrentIndex(to);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    carousel.current.prev();
  };
  const handleNext = (e) => {
    e.preventDefault();
    carousel.current.next();
  };
  return (
    <SwiperWrapper bg={banners.length && banners[currentIndex].imageUrl}>
      <Content className='wrap-v2'>
        <button
          className='btn prev banner-spirit'
          onClick={(e) => handlePrev(e)}
        ></button>
        <button
          className='btn next banner-spirit'
          onClick={(e) => handleNext(e)}
        ></button>
        <Carousel
          ref={carousel}
          autoplay
          effect='fade'
          dots={{ className: 'dots' }}
          beforeChange={(from, to) => handleBeforeChange(from, to)}
        >
          {banners &&
            banners.map((banner) => (
              <div key={banner.targetId} className='banner'>
                <a href={banner.url} target='_blank' rel='noreferrer'>
                  <img src={banner.imageUrl} alt='' />
                </a>
              </div>
            ))}
        </Carousel>
        <Download className='download-spirit'>
          <a href='/download' className='download-btn download-spirit'>
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </Download>
      </Content>
    </SwiperWrapper>
  );
});
