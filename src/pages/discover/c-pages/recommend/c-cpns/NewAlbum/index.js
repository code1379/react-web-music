import React, { memo, useRef } from 'react';

import { useSelector } from 'react-redux';
import CommonHeader from '@/components/CommonHeader';
import { NewAlbumWrapper, Album } from './style';

import { Carousel } from 'antd';
import { getSizedImage } from '../../../../../../utils';

const PAGE_COUNT = 5;

export default memo(function NewAlbum() {
  const swiper = useRef(null);

  // redux
  const albums = useSelector((state) => state.getIn(['recommend', 'newAlbums']));
  // console.log(albums);
  const newAlbums = [];
  for (let i = 0; i < albums.length; i += PAGE_COUNT) {
    newAlbums.push(albums.slice(i, i + PAGE_COUNT));
  }

  const handlePrev = () => {
    swiper.current.prev();
  };
  const handleNext = () => {
    swiper.current.next();
  };
  return (
    <NewAlbumWrapper>
      <CommonHeader title='新碟上架' />
      <div className='carousel-wrapper'>
        <div className='left btn index-spirit' onClick={() => handlePrev()}></div>
        <div className='right btn index-spirit' onClick={() => handleNext()}></div>
        <Carousel ref={swiper}>
          {newAlbums.map((album, index) => (
            <Album key={index}>
              {album.map((item) => (
                <div className='item' key={item.id}>
                  <div className='img-wrapper'>
                    <img src={getSizedImage(item.picUrl, 100)} alt='' />
                    <div className='mask coverall-spirit'></div>
                  </div>
                  <div className='song-name text-nowrap'>{item.name}</div>
                  <div className='artist-name text-nowrap'>{item.artist.name}</div>
                </div>
              ))}
            </Album>
          ))}
        </Carousel>
      </div>
    </NewAlbumWrapper>
  );
});
