import styled from 'styled-components';

export const HotAnchorWrapper = styled.div`
  padding: 30px 20px 0;
  .dj-list {
    padding-top: 20px;
    .dj {
      cursor: pointer;
      margin-bottom: 10px;
      display: flex;
      .info {
        margin-left: 5px;
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
