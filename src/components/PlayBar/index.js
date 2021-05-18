import React, { memo } from 'react';
import { useState } from 'react';
import { getSizedImage } from '../../utils';

import { PlayBarWrapper } from './style';
import { Slider } from 'antd';
import { useRef } from 'react';

export default memo(function PlayBar() {
  const [isShow, setIsShow] = useState(true);
  const [playStat, setPlayStat] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (!playStat) {
      audioRef.current.play();
      setPlayStat(true);
    } else {
      audioRef.current.pause();
      setPlayStat(false);
    }
  };
  return (
    <PlayBarWrapper show={isShow}>
      <div className='hand' onClick={() => setIsShow(!isShow)}></div>
      <div className='bg'>
        <div className='bg-l playbar-spirit'></div>
        <div className='lock playbar-spirit'></div>
        <div className='bg-r playbar-spirit'></div>
      </div>

      <div className='wrap-v2'>
        <audio
          ref={audioRef}
          src='https://music.163.com/song/media/outer/url?id=571340039.mp3'
        />
        <div className='btns'>
          <div className='prev btn playbar-spirit'></div>
          <div
            className={
              playStat ? 'pause play btn playbar-spirit' : 'play btn playbar-spirit'
            }
            onClick={handlePlay}
          ></div>
          <div className='next btn playbar-spirit'></div>
        </div>

        <div className='play-info'>
          <div className='img-container'>
            <img
              src={getSizedImage(
                'https://p2.music.126.net/aoxhrGqswLmyPDib4rckGQ==/109951165959603807.jpg',
                34
              )}
              alt=''
            />
            <div className='mask playbar-spirit'></div>
          </div>
          <div className='content'>
            <div className='head'>
              <span>抢先</span>
              <span>Todd Li</span>
            </div>
            <div className='slide-bar'>
              <Slider defaultValue={30} />
              <div className='time'> 00:36/02:22</div>
            </div>
          </div>
        </div>
        <div className='operator'>
          <span>收藏</span>
          <span>转发</span>
        </div>
        <div className='control'>
          <div className='volume'></div>
          <div className='pattern'>单曲循环</div>
          <div className='playList'></div>
        </div>
      </div>
    </PlayBarWrapper>
  );
});
