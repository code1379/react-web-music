import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
  padding: 0 20px;
  margin: 16px 0 16px 0px;
  .singer-list {
    .singer {
      cursor: pointer;
      background-color: #fafafa;
      margin-top: 14px;
      display: flex;
      &:hover {
        background-color: #f4f4f4;
      }
      .info {
        flex: 1;
        border: 1px solid #e9e9e9;
        border-left: 0;
        padding-left: 14px;
        .name {
          font-size: 14px;
          font-weight: bold;
          margin: 8px 0;
        }
        .tag {
          color: #666;
          
        }
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 23px;
  border-bottom: 1px solid #ccc;
  .title {
    font-weight: bold;
  }
`;
