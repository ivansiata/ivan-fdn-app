import { combineReducers } from "redux";
import editorChoiceReducer from "./editorChoiceReducer";
import latestArticleReducer from "./latestArticleReducer";
import latestReviewReducer from "./latestReviewReducer";

const reducers = combineReducers({
  editorChoiceStore: editorChoiceReducer,
  latestArticleStore: latestArticleReducer,
  latestReviewStore: latestReviewReducer,
});

export default reducers;
