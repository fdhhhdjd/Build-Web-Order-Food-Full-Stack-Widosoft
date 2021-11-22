import axios from "axios";
import * as types from "./ActionTypes";
export const FetchAllStart = () => ({
  type: types.FETCH_API_START,
});
export const FetchAllSuccess = (api) => ({
  type: types.FETCH_API_SUCCESS,
  payload: api,
});
export const FetchAllFail = (error) => ({
  type: types.FETCH_API_FAIL,
  payload: error,
});
