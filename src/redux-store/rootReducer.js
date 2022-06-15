import { combineReducers } from 'redux';
import GifsReducer from './Gifs/reducer';
export default combineReducers({
  gifs: GifsReducer,
});
