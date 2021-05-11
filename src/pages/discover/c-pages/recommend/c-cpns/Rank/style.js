import styled from 'styled-components';

import indexBill from '@/assets/images/index_bill.png';

export const RankWrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  background: url(${indexBill}) no-repeat;
  height: 472px;
  .bill {
    width: 230px;
    .bill-info {
      display: flex;
      margin: 20px 0 20px 20px;
      .bar {
        margin: 6px 0 0 10px;
        .name {
          font-size: 14px;
          font-weight: bold;
        }
        .controller {
          margin-top: 10px;
          display: flex;
          .btn {
            cursor: pointer;
            width: 22px;
            height: 22px;
            margin-right: 10px;
            &.play {
              background-position: -267px -205px;
              &:hover {
                background-position: -267px -235px;
              }
            }
            &.save {
              background-position: -300px -205px;
              &:hover {
                background-position: -300px -235px;
              }
            }
          }
        }
      }
    }
    .tracks {
      padding-left: 15px;
      .track {
        height: 32px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .left {
          display: flex;
          align-items: center;
        }
        .index {
          display: inline-block;
          text-align: center;
          line-height: 32px;
          width: 35px;
          color: #666;
          font-size: 16px;
          &.top {
            color: #c10d0c;
          }
        }
        .name {
          line-height: 32px;
          display: inline-block;
          &:hover {
            width: 96px;
          }
        }
        &:hover {
          .controller-wrapper {
            display: block;
          }
        }
        .controller-wrapper {
          display: none;
        }
        .controller {
          width: 82px;
          display: flex;
          height: 32px;
          align-items: center;
          .btn {
            width: 17px;
            height: 17px;
            margin-right: 10px;
            &.play {
              background-position: -267px -268px;
              &:hover {
                background-position: -267px -268px;
              }
            }
            &.add {
              background-position: 0 -700px;
              position: relative;
              top: 2px;
              &:hover {
                background-position: 0 -700px;
              }
            }
            &.save {
              background-position: -297px -268px;
              &:hover {
                background-position: -297px -268px;
              }
            }
          }
        }
      }
      .more {
        line-height: 32px;
        text-align: right;
        margin-right: 32px;
      }
    }
  }
`;
