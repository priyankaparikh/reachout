import { FETCH_USER } from '../actions/types';

// setting the default state of the parameter states that the function
// has no idea if the user is actually logged in
 export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    // when the function hears from FETCH_USER
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
