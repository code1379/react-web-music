import styled from 'styled-components';

export const HotRecommendWrapper = styled.div``;

export const List = styled.div`
  margin: 20px 0 35px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 140px;
    padding-bottom: 30px;
    .img-wrapper {
      width: 140px;
      height: 140px;
      overflow: hidden;
      position: relative;
      .msk {
        width: 140px;
        height: 140px;
        position: absolute;
        left: 0;
        top: 0;
        background-position: 0 0;
      }
      .bottom {
        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        .listen {
          display: flex;
          align-items: center;
        }
        .headset {
          display: inline-block;
          margin-right: 5px;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          cursor: pointer;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -60px;
          }
        }
      }
    }
    .name {
      margin-top:8px;
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;
