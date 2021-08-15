import ActionTypes from "../constants/action-types";

const initialState = {
  data: [],
};

const editorChoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EDITOR_CHOICE_DATA:
      return {
        data: [...state.data, ...action.payload],
      };
      break;
    default:
      return state;
  }
};

export default editorChoiceReducer;
