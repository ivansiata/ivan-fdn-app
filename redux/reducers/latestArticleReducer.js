import ActionTypes from "../constants/action-types";

const initialState = {
  data: [],
};

const latestArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LATEST_ARTICLE_DATA:
      return {
        data: [...state.data, ...action.payload],
      };
      break;
    default:
      return state;
  }
};

export default latestArticleReducer;
