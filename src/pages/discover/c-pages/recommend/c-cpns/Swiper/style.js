import styled from 'styled-components';

import bgBanner from '@/assets/images/banner.png';
export const SwiperWrapper = styled.div`
  height: 285px;
  background-size: 6000px;
  background-position: center;
  background-image: url(${(props) => props.bg + '?imageView&blur=40x20'});
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  .btn {
    display: block;
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    outline: none;
    cursor: pointer;
    &.prev {
      background-position: 0 -360px;
      left: -50px;
      &:hover {
        background-position: 0 -430px;
      }
    }
    &.next {
      background-position: 0 -508px;
      right: -50px;
      &:hover {
        background-position: 0 -578px;
      }
    }
  }
  .ant-carousel {
    width: 730px;
    .banner {
      img {
        width: 100%;
        height: 285px;
      }
    }
    .dots {
      button {
        transition: all 0s !important;
      }
      li {
        width: 20px !important;
        height: 20px !important;
        button {
          height: 20px !important;
          background: url(${bgBanner}) no-repeat;
          background-position: 3px -343px;
        }
        &.slick-active {
          width: 20px !important;
          button {
            width: 20px !important;
            margin: 0 !important;
            background-position: -16px -343px;
          }
        }
      }
    }
  }
`;

export const Download = styled.div`
  width: 255px;
  height: 285px;
  background-position: 0 0;
  .download-btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    &:hover {
      background-position: 0 -290px;
    }
  }
  p {
    color: #8d8d8d;
    margin: 10px auto;
    text-align: center;
  }
`;
