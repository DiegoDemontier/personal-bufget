import { combineReducers } from 'redux';
import login from './login';
import wallet from './wallet';

const rootReducer = combineReducers({
  login,
  wallet,
});

export default rootReducer;
