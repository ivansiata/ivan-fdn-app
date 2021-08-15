import ActionTypes from "../constants/action-types";

const initialState = {
  "editor's choice": [],
  "latest articles": [],
  "latest review": [],
  "latest review slider": {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return {
        ...action.payload,
        "latest review slider": {
          totalPage: Math.ceil(action.payload["latest review"].length / 2),
          currentPage: 1,
          firstPage: true,
          lastPage: false,
        },
      };
      break;
    case ActionTypes.SET_LATEST_REVIEW_PAGE:
      const totalPage = state["latest review slider"].totalPage;
      let newPage = state["latest review slider"].currentPage + action.payload;
      if (newPage > totalPage) {
        newPage = totalPage;
      } else if (newPage < 1) {
        newPage = 1;
      }
      return {
        ...state,
        "latest review slider": {
          ...state["latest review slider"],
          currentPage: newPage,
          firstPage: newPage == 1 ? true : false,
          lastPage: newPage == totalPage ? true : false,
        },
      };
      break;
    default:
      return state;
  }
};

export default dataReducer;
