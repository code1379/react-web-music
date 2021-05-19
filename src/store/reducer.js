import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as songDetailReducer } from '@/pages/discover/c-pages/song-detail/store';
import { reducer as playBarReducer } from '@/components/PlayBar/store';

const reducer = combineReducers({
  recommend: recommendReducer,
  songDetail: songDetailReducer,
  playbar: playBarReducer
});

export default reducer;