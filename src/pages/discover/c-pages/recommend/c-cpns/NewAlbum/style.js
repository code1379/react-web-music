import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  .carousel-wrapper {
    position: relative;
    .btn {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      width: 17px;
      height: 17px;
      cursor: pointer;
      &.left {
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }

      &.right {
        right: 5px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
  .ant-carousel {
    margin: 20px 0 37px !important;
    padding: 20px 30px 15px 25px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
  }
`;

export const Album = styled.div`
  display: flex !important;
  justify-content: space-between;

  .item {
    width: 118px;
    overflow: hidden;
    font-size: 12px;
    position: relative;
    .img-wrapper {
      position: relative;
      .mask {
        width: 118px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0;
        background-position: 0 -570px;
      }
    }

    .song-name {
      margin-top: 5px;
    }
    .artist-name {
      color: #666;
    }
  }
`;
