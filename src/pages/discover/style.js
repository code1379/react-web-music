import styled from 'styled-components';

export const DiscoverPageWrapper = styled.div``;

export const TopNav = styled.div`
  height: 30px;
  background-color: #c20c0c;
  .content {
    height: 100%;
    padding-left: 180px;
    .nav-item {
      display: inline-block;
      line-height: 20px;
      height: 20px;
      text-align: center;
      padding: 0 13px;
      margin: 2px 17px 0;
      color: #fff;
      font-size: 12px;
      &.active {
        background-color: rgb(155, 9, 9);
        border-radius: 20px;
      }
    }
  }
`;
