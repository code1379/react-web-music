import React, { memo, useEffect } from 'react';
import { getBanner } from 'service/recommend';

export default memo(function Recommend() {
  useEffect(() => {
    getBanner().then(res => {
      console.log(res)
    })
  }, [])
  return <div style={{ minHeight: 800 }}>推荐页面</div>;
});
