import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

/*

// Register User
export const registerUser = (userData, history) => dispatch => {

  axios
    .post("/", userData)
    .then(res => history.push("/submit")) // re-direct to success page on submit
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};

*/
