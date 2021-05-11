import React, { memo } from 'react';

import CommonHeader from '@/components/CommonHeader';
import { RankWrapper } from './style';

export default memo(function Rank() {
  return <RankWrapper>
    <CommonHeader title="榜单"/>
  </RankWrapper>;
});
