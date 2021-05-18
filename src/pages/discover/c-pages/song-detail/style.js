import styled from 'styled-components';

export const SongDetailWrapper = styled.div`
  display: flex;
  border: 1px solid #d3d3d3;
  border-top-width: 0;
  border-bottom-width: 0;
  min-height: 730px;
`;

export const LeftWrapper = styled.div`
  width: 710px;
  border-right: 1px solid #d3d3d3;
  padding: 30px 30px 30px 39px;
  .song-detail {
    display: flex;
    .left {
      margin-right: 30px;
      display: flex; 
      flex-direction: column;
      align-items: center;
      .img-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 198px;
        height: 198px;
        .mask {
          width: 206px;
          height: 205px;
          position: absolute;
          top: -4.5px;
          left: -4px;
          background-position: -140px -580px;
        }
      }
      .generate-outlink {
        margin-top: 20px;

      }
    }
    .right {
      .detail {
        padding-bottom: 20px;
        .title {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          .tag {
            display: inline-block;
            margin-right:10px;
            width: 54px;
            height: 24px;
            background-position: 0 -463px;
          }
        }
        .singer {
          margin: 10px 0;
        }
        .belong {
          margin: 12px 0;
        }
      }
      .lyric {
        margin-top: 13px;
        padding-bottom: 10px;
        overflow-y: hidden;
        .line {
          line-height: 23px;
        }
      }
      .drawer {
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
`;

export const RightWrapper = styled.div`
  width: 270px;
`;
