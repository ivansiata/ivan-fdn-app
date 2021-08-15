import ActionTypes from "../constants/action-types";

export const setData = (datas) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: datas,
  };
};

export const setLatestReviewPage = (value) => {
  return {
    type: ActionTypes.SET_LATEST_REVIEW_PAGE,
    payload: value,
  };
};
