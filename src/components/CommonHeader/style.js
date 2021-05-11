import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c10d0c;
  .left {
    display: flex;
    align-items: center;
    .circle {
      height: 33px;
      width: 34px;
      background-position: -225px -156px;
    }
    .title {
      font-size: 20px;
      font-family: 'Microsoft YaHei';
    }
    .nav {
      display: flex;
      margin-left: 20px;
      .nav-item {
        font-size: 10px;
        &::after {
          display: inline-block;
          content: '|';
          margin: 0 10px;
        }
        &:last-child {
          &::after {
            content: ""
          }
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .arrow {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
