import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
  dataStore: dataReducer,
});

export default reducers;
