import React, { memo } from 'react';
import { BottomFooterWrapper, LeftWrapper, RightWrapper } from './style';
const services = [
  { title: '服务条款', link: 'https://st.music.163.com/official-terms/service' },
  { title: '隐私政策', link: 'https://st.music.163.com/official-terms/privacy' },
  { title: '儿童隐私政策', link: 'https://st.music.163.com/official-terms/children' },
  { title: '版权投诉指引', link: 'https://music.163.com/st/staticdeal/complaints.html' },
  { title: '意见反馈', link: '#' }
];

const logos = ['amped', 'auth', 'musician', 'reward', 'cash'];

export default memo(function BottomFooter() {
  return (
    <BottomFooterWrapper>
      <div className='wrap-v2'>
        <LeftWrapper>
          <div className='links row'>
            {services.map((item) => {
              return (
                <a className='link' href={item.link} key={item.title}>
                  {item.title}
                </a>
              );
            })}
          </div>
          <div className='row'>
            <span className='sep'>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'>
              浙网文[2021] 1186-054号
            </a>
          </div>
          <div className='row'>
            <span className='sep'>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href='mailto:ncm5990@163.com'>ncm5990@163.com</a>
          </div>
          <div className='row'>
            <a href='https://beian.miit.gov.cn/#/Integrated/index'>
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a
              className='police'
              href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'
            >
              <i className='police-logo'></i> <span>浙公网安备 33010902002564号</span>
            </a>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <div className='units'>
            {logos.map((item) => (
              <div className='unit' key={item}>
                <div className={`bottom-logo logo ${item}`}></div>
                <div className={`bottom-tt title ${item}`}></div>
              </div>
            ))}
          </div>
        </RightWrapper>
      </div>
    </BottomFooterWrapper>
  );
});
