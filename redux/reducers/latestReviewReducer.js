import ActionTypes from "../constants/action-types";

const initialState = {
  data: [],
  slider: {},
};

const latestReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LATEST_REVIEW_DATA:
      return {
        data: [...state.data, ...action.payload],
        slider: {
          totalPage: Math.ceil(action.payload.length / 2),
          currentPage: 1,
          firstPage: true,
          lastPage: false,
        },
      };
      break;
    case ActionTypes.SET_LATEST_REVIEW_PAGE:
      const totalPage = state.slider.totalPage;
      let newPage = state.slider.currentPage + action.payload;
      if (newPage > totalPage) {
        newPage = totalPage;
      } else if (newPage < 1) {
        newPage = 1;
      }
      return {
        data: [...state.data],
        slider: {
          ...state.slider,
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

export default latestReviewReducer;
