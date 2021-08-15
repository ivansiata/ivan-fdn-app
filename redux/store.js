import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducers from "./reducers";

const makeStore = () => createStore(reducers, {});

export const wrapper = createWrapper(makeStore);
