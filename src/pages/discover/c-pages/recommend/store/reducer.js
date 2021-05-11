import { Map } from 'immutable';
import * as constants from './constants'
const defaultState = Map({
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankList: []
})

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
    default: 
      return state
  }
}