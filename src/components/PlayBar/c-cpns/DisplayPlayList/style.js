import styled from 'styled-components';
import headBg from '@/assets/images/playlist_bg.png';
export const DisplayPlayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 986px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -294px;
  height: 301px;
  /* background-color: tomato; */
`;

export const ListHeader = styled.div`
  height: 41px;
  background: url(${headBg}) no-repeat;
  background-position: 0 0;
  position: relative;
  z-index: 2;
`;

export const ListBody = styled.div`
  background: url(${headBg}) repeat-y;
  background-position: -1014px 0;
  height: 260px;
  margin-top: -1px;
`;

export const ContetnBox = styled.div`
  overflow: hidden;
  position: absolute;
  left: 3px;
  width: 980px;
  height: 300px;
  color: #fff;
  display: flex;
  .bg-img {
    position: absolute;
    z-index: 1;
    width: 980px;
    height: auto;
    opacity: 0.2;
  }
`;

export const PlayListWrapper = styled.div`
  width: 560px;

  .head {
    height: 40px;
    line-height: 40px;
    position: relative;
    z-index: 10;
    padding-left: 25px;
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }
  }
  .list {
    position: relative;
    z-index: 3;
    height: 260px;
    position: relative;
    .msk {
      position: absolute;
      background-color: #121212;
      height: 260px;
      width: 558px;
      z-index: 2;
      opacity: 0.5;
    }
    .song {
      display: flex;
      justify-content: space-between;
      height: 28px;
      line-height: 28px;
      .name {
        width: 266px;
        padding-left: 25px;
      }
      .right {
        display: flex;
        .singer {
          width: 80px;
        }
        .time {
          width: 45px;
        }
      }
    }
  }
`;

export const LyricWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 420px;
  .head {
    height: 40px;
    line-height: 40px;
    position: relative;
    z-index: 10;
    padding-left: 25px;
    text-align: center;
    font-size: 14px;
  }
  .lyrics-container {
    height: 220px;
    margin: 20px 0;
    overflow: hidden;
  }
  .lyrics {
    transition: all .7s linear;
    .line {
      &.active{
        font-size: 14px;
        color: #fff;
      }
      transition: color .7s linear;
      line-height: 32px;
      color: #989898;
      text-align: center;
    }
  }
`;
