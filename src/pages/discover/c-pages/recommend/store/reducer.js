import { Map } from 'immutable';
import * as constants from './constants'
const defaultState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankList: [],
  hotSingers: [],
  hotAnchors: []
});

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_BANNERS: 
      return state.set("banners", action.banners)
    case constants.CHANGE_HOT_RECOMMEND: 
      return state.set('hotRecommends', action.recommends);
    case constants.CHANGE_NEW_ALBUM: 
      return state.set("newAlbums", action.albums);
    case constants.CHANGE_RANK_LIST:
      return state.set("rankList", action.rankList)
    case constants.CHANGE_HOT_SINGER:
      return state.set('hotSingers', action.hotSingers);
    case constants.CHANGE_HOT_ANCHOR: 
      return state.set('hotAnchors', action.hotAnchors);
    default: 
      return state
  }
}