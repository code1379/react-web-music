import React, { memo } from 'react';
import { useState } from 'react';
import { getFormatTime, getSizedImage } from '../../utils';

import { PlayBarWrapper } from './style';
import { Slider } from 'antd';
import { useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { actions } from './store';
import { useEffect } from 'react';

export default memo(function PlayBar() {
  const [isInit, setInit] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [playStat, setPlayStat] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [btnPress, setBtnPress] = useState(false);
  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const [timer, setTimer] = useState(null);

  const { id, detail, list } = useSelector(
    (state) => ({
      id: state.getIn(['playbar', 'currentSongId']),
      detail: state.getIn(['playbar', 'currentSongDetail']),
      list: state.getIn(['playbar', 'playList'])
    }),
    shallowEqual
  );

  const hasKeys = Object.keys(detail).length;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setAudioRefAction(audioRef.current));
  }, [dispatch, audioRef]);

  useEffect(() => {
    if (isInit) {
      setInit(false);
    } else {
      setIsShow(true);
      setTimer(
        setTimeout(() => {
          setIsShow(false);
        }, 1000)
      );
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
            console.log('audio played auto');
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('playback prevented');
          });
      }
    }
  }, [id]);

  const handlePlay = () => {
    if (id !== -1) {
      if (!playStat) {
        console.log('play');
        audioRef.current.play();
        setPlayStat(true);
      } else {
        console.log('pause');
        audioRef.current.pause();
        setPlayStat(false);
      }
    }
  };
  const handleLoadedData = (e) => {
    setDuration(e.target.duration);
  };

  const handleTimeUpdate = (e) => {
    if (!btnPress) {
      // console.log(e.target.currentTime);
      const curTime = e.target.currentTime;
      if (Math.floor(curTime) !== currentTime) {
        setCurrentTime(curTime);
        const percentage = (curTime / duration) * 100;
        setPercentage(percentage);
      }
    }
  };

  const handleSliderChange = (e) => {
    setBtnPress(true);
    console.log('handleSliderChange', e);
    const currentTime = (e / 100) * duration;
    setPercentage(e);
    setCurrentTime(currentTime);
  };
  const handleSliderAfterChange = (e) => {
    console.log('handleSliderAfterChange', e);
    audioRef.current.currentTime = (duration * e) / 100;
    console.log(sliderRef.current);
    sliderRef.current.blur();
    setBtnPress(false);
    if (!playStat) {
      audioRef.current.play();
      setPlayStat(true);
    }
  };

  const handleNext = (e) => {
    console.log('next');
  };

  const handleEnded = (e) => {
    console.log('handleEnded');
    console.log(e.target.currentTime);
    e.target.currentTime = 0;
    e.target.play();
    console.log(e.target.currentTime);
    setCurrentTime(0);
  };

  return (
    <PlayBarWrapper
      show={isShow}
      locked={!isLocked}
      onMouseEnter={() => {
        console.log(timer);
        clearTimeout(timer);
        setIsShow(true);
      }}
      onMouseLeave={() => setIsShow(false)}
    >
      <div
        className='hand'
        // onClick={() => setIsShow(!isShow)}
      ></div>
      <div className='bg'>
        <div className='bg-l playbar-spirit'></div>
        <div className='lock playbar-spirit' onClick={() => setIsLocked(!isLocked)}>
          <div
            className={
              isLocked ? 'btn-lock   playbar-spirit' : ' btn-lock unlock  playbar-spirit'
            }
          ></div>
        </div>
        <div className='bg-r playbar-spirit'></div>
      </div>

      <div className='wrap-v2'>
        <audio
          ref={audioRef}
          onPlay={(e) => setPlayStat(true)}
          onLoadedData={(e) => handleLoadedData(e)}
          onTimeUpdate={(e) => handleTimeUpdate(e)}
          onEnded={(e) => handleEnded(e)}
          src={`https://music.163.com/song/media/outer/url?id=${id}.mp3`}
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
                (hasKeys && detail.al.picUrl) ||
                  'https://p1.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg',
                34
              )}
              alt=''
            />
            <div className='mask playbar-spirit'></div>
          </div>
          <div className='content'>
            <div className='head'>
              <span>{(hasKeys && detail.name) || ''}</span>&nbsp;&nbsp;
              <span>{(hasKeys && detail.ar[0].name) || ''}</span>
            </div>
            <div className='slide-bar'>
              <Slider
                ref={sliderRef}
                // value={[percentage, 30]}
                value={percentage}
                onChange={(e) => handleSliderChange(e)}
                onAfterChange={(e) => handleSliderAfterChange(e)}
              />
              <div className='time'>
                {getFormatTime(currentTime)} / {getFormatTime(duration)}
              </div>
            </div>
          </div>
        </div>
        <div className='operator'>
          <span className='save icon playbar-spirit'>收藏</span>
          <span className='share icon playbar-spirit'>转发</span>
        </div>
        <div className='control'>
          <div className='volume icon playbar-spirit'></div>
          <div className='pattern one icon playbar-spirit'>单曲循环</div>
          <div className='play-list'>
            <div className='list icon playbar-spirit'>{list.length}</div>
          </div>
        </div>
      </div>
    </PlayBarWrapper>
  );
});
