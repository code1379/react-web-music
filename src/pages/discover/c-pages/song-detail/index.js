import React, { memo, useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { SongDetailWrapper, LeftWrapper, RightWrapper } from './style';
import { actions } from './store';
import { useLocation } from 'react-router-dom';

import LyricParser from '@/utils/lyric-parser';
import { getSizedImage } from '../../../../utils';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default memo(function SongDetail(props) {
  // state, redux-state
  const [isOpen, setIsOpen] = useState(false)
  let query = useQuery();
  const [id] = useState(query.get('id'));
  const { displaySongDetail, displaySongLyric } = useSelector(
    (state) => ({
      displaySongDetail: state.getIn(['songDetail', 'displaySongDetail']),
      displaySongLyric: state.getIn(['songDetail', 'displaySongLyric'])
    }),
    shallowEqual
  );
  const { lines } = new LyricParser(displaySongLyric);
  // console.log(lines, displaySongDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getDisplaySongDetailByIdAction(id));
  }, [dispatch, id]);

  const generateLyrics = () => {
    if (lines.length > 0) {
      return lines.map((line, index) => {
        return (
          <div className='line' key={line.time}>
            {line.txt}
          </div>
        );
      });
    } else {
      return null;
    }
  };

  if (Object.keys(displaySongDetail).length > 0) {
    return (
      <SongDetailWrapper className='wrap-v2'>
        <LeftWrapper>
          <div className='song-detail'>
            <div className='left'>
              <div className='img-container'>
                <img src={getSizedImage(displaySongDetail.al.picUrl, 130)} alt='' />
                <div className='mask coverall-spirit'></div>
              </div>
              <p className="generate-outlink">
                <i>音乐图标</i>生成外链播放器
              </p>
            </div>
            <div className='right'>
              <div className='detail'>
                <div className='title'>
                  <span className='tag icon-spirit'></span>
                  {displaySongDetail.name}
                </div>
                <div className='singer'>歌手：{displaySongDetail.ar[0].name}</div>
                <div className='belong'>所属专辑: {displaySongDetail.al.name}</div>
              </div>
              <div className='btns'></div>

              <div className='lyric' style={ isOpen ? {height: "auto"}: {height: 297}}>{generateLyrics()}</div>
              <div onClick={() => setIsOpen(!isOpen)} className="drawer" >{isOpen ? "收起": "展开"}</div>
            </div>
          </div>
        </LeftWrapper>
        <RightWrapper>right</RightWrapper>
      </SongDetailWrapper>
    );
  } else {
    return null;
  }
});
