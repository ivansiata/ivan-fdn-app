import ActionTypes from "../constants/action-types";

export const setEditorChoiceData = (datas) => {
  return {
    type: ActionTypes.SET_EDITOR_CHOICE_DATA,
    payload: datas,
  };
};

export const setlatestArticleData = (datas) => {
  return {
    type: ActionTypes.SET_LATEST_ARTICLE_DATA,
    payload: datas,
  };
};

export const setlatestReviewData = (datas) => {
  return {
    type: ActionTypes.SET_LATEST_REVIEW_DATA,
    payload: datas,
  };
};

export const setLatestReviewPage = (value) => {
  return {
    type: ActionTypes.SET_LATEST_REVIEW_PAGE,
    payload: value,
  };
};
