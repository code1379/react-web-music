import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  text-align: center;

  .info {
    text-align: left;
    margin: 0 22.5px;
    line-height: 22px;
    color: #666;
    padding: 16px 0;
  }
  .login-btn {
    width: 100px;
    height: 31px;
    background-position: 0 -195px;
    border: none;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    line-height: 31px;
    &:hover {
      background-position: -110px -195px;
    }
  }
`;
