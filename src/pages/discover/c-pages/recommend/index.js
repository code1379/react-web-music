import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getBanner } from 'service/recommend';
import { actions } from './store';

export default memo(function Recommend() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getBannersAction())
  }, [dispatch]);
  return <div style={{ minHeight: 800 }}>
    
  </div>;
});
