import styled from 'styled-components';

import policePng from '@/assets/images/police.png';

export const BottomFooterWrapper = styled.div`
  height: 173px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  .wrap-v2 {
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftWrapper = styled.div`
  padding: 14px 0 0 0;
  .links {
    .link {
      color: #999;
      &::after {
        content: '|';
        margin: 0 10px;
      }
    }
  }
  .row {
    line-height: 24px;
    display: flex;
    .sep {
      margin-right: 14px;
    }
    .police {
      display: flex;
      align-items: center;
    }
    .police-logo {
      display: inline-block;
      margin: 0 5px 0 14px;
      width: 14px;
      height: 14px;
      background-image: url(${policePng});
      background-size: contain;
    }
  }
`;

export const RightWrapper = styled.div`
  margin-top: 33px;
  .units {
    width: 420px;
    display: flex;
    justify-content: space-between;
    .unit {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 50px;
        height: 45px;
        background-position: -63px -456.5px;
        background-size: 110px 552px;
        &.auth {
          background-position: -63px -101px;
        }
        &.musician {
          background-position: 0 0;
        }
        &.reward {
          background-position: -60px -50px;
        }
        &.cash {
          background-position: 0 -101px;
        }
      }
      .title {
        height: 14px;
        width: 52px;
        background-position: 0 -108px;
        background-size: 180px 139px;
        margin: 5px 5px 0 0;
        &.amped {
          width: 72px;
        }
        &.auth {
          background-position: -1px -91px;
        }
        &.musician {
          background-position: 0 0;
        }
        &.reward {
          background-position: 0 -54px;
        }
        &.cash {
          background-position: -1px -72px;
        }
      }
    }
  }
`;
