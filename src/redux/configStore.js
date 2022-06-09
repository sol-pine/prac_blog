import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import user from "./modules/user";
import post from "./modules/post";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
  post: post,
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
