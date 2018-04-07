import { combineReducers } from 'redux';
// import the auth reducer here
import authReducer from './authReducer';
// it is convention to have a index.js.
// purpose is it allows us to simply import the reducers directly.
// combine it with the combine reducers.
// export it after combining.
export default combineReducers({
  //keys represent the state object.
  // auth states is being manufactured by the authReducer.
  auth: authReducer
});
