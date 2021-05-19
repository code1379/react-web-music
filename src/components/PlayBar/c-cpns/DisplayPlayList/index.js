import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getFormatTime } from '@/utils';
import {
  DisplayPlayListWrapper,
  ListHeader,
  ListBody,
  ContetnBox,
  PlayListWrapper,
  LyricWrapper
} from './style';

import LyricParser from '@/utils/lyric-parser';

export default memo(function DisplayPlayList() {
  const { list, detail, lyric, audioRef } = useSelector(
    (state) => ({
      list: state.getIn(['playbar', 'playList']),
      detail: state.getIn(['playbar', 'currentSongDetail']),
      lyric: state.getIn(['playbar', 'lyric']),
      audioRef: state.getIn(['playbar', 'audioRef'])
    }),
    shallowEqual
  );

  const [currentIndex, setCurrentIndex] = useState(-1);
  const lyricParser = new LyricParser(lyric);
  const { lines } = lyricParser;
  const [style, setStyle] = useState({});
  useEffect(() => {
    console.log('useEffect 执行了');
    const fn = (e) => {
      const index = lyricParser.getIndex(e.target.currentTime * 1000);
      if (index !== currentIndex) {
        setCurrentIndex(index - 1);

        console.log(index);
        const afterRows = 4;
        // 第五行开始滚动
        if (index >= afterRows + 1) {
          const offset = -32 * (index - afterRows);
          console.log(offset);
          setStyle({
            transform: `translateY( ${offset}px)`
          });
        } else {
          setStyle({
            transform: `translateY(0px)`
          });
        }
      }
    };
    if (audioRef) {
      audioRef.addEventListener('timeupdate', fn);
    }
    return () => {
      if (audioRef) {
        audioRef.removeEventListener('timeupdate', fn);
      }
    };
  }, [audioRef, currentIndex, lyricParser]);
  return (
    <DisplayPlayListWrapper>
      <ListHeader></ListHeader>
      <ListBody></ListBody>
      <ContetnBox>
        <img
          className='bg-img'
          src={
            Object.keys(detail).length
              ? `http://music.163.com/api/img/blur/${detail.al.pic}`
              : ''
          }
          alt=''
        />
        <PlayListWrapper>
          <div className='head'>
            <div className='title'>播放列表 ({list.length})</div>
          </div>
          <div className='list'>
            <div className='msk'></div>
            <div className='songs'>
              {list.map((song) => (
                <div className='song' key={song.id}>
                  <div className='name text-nowrap'>{song.name}</div>
                  <div className='right'>
                    <div className='singer text-nowrap'>{song.ar[0].name}</div>
                    <div className='time'>{getFormatTime(song.dt / 1000)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PlayListWrapper>
        <LyricWrapper>
          <div className='head'>{detail.name}</div>
          <div className='lyrics-container'>
            <div className='lyrics' style={style}>
              {lines.map((line, index) => (
                <div
                  className={index === currentIndex ? 'active line' : 'line'}
                  key={line.time}
                >
                  {line.txt === "" ? "　": line.txt}
                </div>
              ))}
            </div>
          </div>
        </LyricWrapper>
      </ContetnBox>
    </DisplayPlayListWrapper>
  );
});
