import axios from "axios";
import { GET_ITEMS, ITEM_LOADING } from "./types";
import cors from "cors";

export const getBugList = () => dispatch => {
  dispatch(setItemLoading());
  axios.get("http://localhost:5000/api/bugs").then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  });
};

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};
