import styled from 'styled-components';

import bgImg from '@/assets/images/topbar.png';

export const TopBarWrapper = styled.div`
  /* 
  TopBar 分为上下两个
  上面是 发现音乐 我的音乐 朋友 [商城 音乐人 下载客户端] 
  下面只有发现音乐有。 推荐 排行榜 歌单 主播电台 歌手 新碟上架
  */
`;

export const Top = styled.div`
  height: 70px;
  background-color: #242424;
  font-size: 14px;
  .wrap-v1 {
    height: 70px;
    color: #ccc;
    display: flex;
    /* logo */
    .logo {
      width: 176px;
      height: 100%;
      background-position: 0 0;
      a {
        display: block;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }

    /* 上面的导航 */
    .top-nav {
      display: flex;
      .nav-item {
        padding: 0 19px;
        line-height: 70px;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: #000;
        }
      }
      /* 最后一个元素 */
      .nav-item:last-child {
        position: relative;
        &::after {
          display: inline-block;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${bgImg});
          background-position: -190px 0px;
          position: absolute;
          top: 20px;
          right: -15px;
        }
      }
    }
  }
`;

// Top 右侧部分为一个整体
export const RightContet = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin-left: 100px;
  font-size: 12px;

  .input-wrapper {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 158px;
    height: 32px;
    padding: 4px 11px;
    border-radius: 16px;
    background-color: #fff;
    .icon {
      margin-right: 4px;
    }
    input {
      font-size: 12px;
      width: 116px;
      height: 22px;
      padding: 0;
      border: none;
      outline: none;
    }
  }

  .creator-center {
    width: 90px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #4f4f4f;
    text-align: center;
    line-height: 32px;
    margin: 0 12px;
}
`;

// 子菜单
export const SubMenu = styled.div`
  height: 5px;
  background-color: #c20c0c;
  font-size: 12px;
`;
