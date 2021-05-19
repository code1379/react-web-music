import styled from 'styled-components';

import playBtn from '@/assets/images/ply_btn.png';
import statBar from '@/assets/images/statbar.png';

export const PlayBarWrapper = styled.div`
  position: fixed;
  z-index: 20;
  transition: all 0.3s ease;
  height: 53px;
  left: 0;
  right: 0;
  width: 100%;
  bottom: ${(props) => {
    return props.show || !props.locked ? 0 : '-48px';
  }};
  transition-delay: ${(props) => (props.show ? 0 : '.5s')};

  .icon {
    cursor: pointer;
    display: inline-block;
    text-indent: -9999px;
    width: 25px;
    height: 25px;
  }

  .hand {
    height: 20px;
    width: 100%;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    top: -10px;
  }
  .bg {
    display: flex;
    .bg-l {
      flex: 1;
      height: 53px;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
    .lock {
      width: 52px;
      height: 67px;
      background-position: 0 -380px;
      position: relative;
      z-index: 10000;
      top: -14px;
      .btn-lock {
        width: 18px;
        height: 18px;
        background-position: -100px -380px;
        margin: 5px 0 0 15px;
        cursor: pointer;
        &.unlock {
          background-position: -80px -380px;
        }
      }
    }
    .bg-r {
      width: 10px;
      height: 53px;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
  }

  .wrap-v2 {
    position: absolute;
    left: 50%;
    margin: 0 auto;
    top: 6px;
    height: 47px;
    transform: translateX(-50%);
    display: flex;

    .btns {
      display: flex;
      align-items: center;
      .btn {
        cursor: pointer;
        width: 28px;
        height: 28px;
        &.next {
          background-position: -80px -130px;
        }
        &.prev {
          background-position: 0 -130px;
        }
      }

      .play {
        margin: 0 10px;
        width: 36px;
        height: 36px;
        background-position: 0 -204px;
        &.pause {
          background-position: 0 -165px;
        }
      }
    }

    .play-info {
      margin-left: 30px;
      display: flex;
      align-items: center;

      .img-container {
        position: relative;
        width: 34px;
        height: 34px;
        .mask {
          /* position: absolute; */
          /* left: 0; */
          /* top: 0; */
          width: 34px;
          height: 35px;
          background-position: 0 -80px;
        }
      }
      .content {
        margin-left: 15px;
        height: 100%;
        padding-top: 6px;
        .head {
          color: #fff;
          margin-bottom: 6px;
        }
        .slide-bar {
          display: flex;
          align-items: center;
          .ant-slider {
            margin: 0;
            width: 493px;
            .ant-slider-rail {
              height: 9px;
              border-radius: 4.5px;
              background: url(${statBar}) no-repeat;
              background-position: right 0;
            }
            .ant-slider-track {
              height: 9px;
              background: url(${statBar}) no-repeat;
              background-position: left -66px;
            }
            .ant-slider-handle {
              margin-top: -8px;
              width: 22px;
              height: 24px;
              background: url(${playBtn}) no-repeat;
              border: none;
            }
          }
          .time {
            margin-left: 10px;
            position: relative;
            top: 1px;
            user-select: none;
            color: #fff;
          }
        }
      }
    }

    .operator {
      height: 100%;
      margin: 0 20px;
      display: flex;
      align-items: center;
      .save {
        background-position: -88px -163px;
      }
      .share {
        background-position: -114px -163px;
      }
    }

    .control {
      height: 100%;
      display: flex;
      align-items: center;
      .volume {
        background-position: -2px -248px;
      }
      .pattern {
        &.one {
          background-position: -66px -344px;
        }
        &.loop {
          background-position: -3px -344px;
        }
        &.shuffle {
          background-position: -66px -248px;
        }
      }
      .play-list {
        color: #fff;
        .list {
          color: #666;
          display: flex;
          align-items: center;
          width: 59px;
          background-position: -42px -68px;
          text-align: center;
          text-indent: 0;
          padding-left: 34px;
          text-align: center;
        }
      }
    }
  }
`;
