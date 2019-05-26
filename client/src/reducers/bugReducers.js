import uuid from "uuid";
import { GET_ITEMS, ITEM_LOADING } from "../actions/types";

const initialState = {
  bugs: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        bugs: action.payload,
        loading: false
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
