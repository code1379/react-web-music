import { Map } from 'immutable';
import * as constants from './constants'
const defaultState = Map({
  banners: []
})

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_BANNERS: 
      return state.set("banners", action.banners)
    default: 
      return state
  }
}