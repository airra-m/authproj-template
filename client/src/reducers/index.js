// ***** This is to combine all reducers as one *****

import { combineReducers } from "redux";

// Import the reducers you have created from the reducers directory
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

/*

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

*/
