import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Reducer from "../Reducer";
import { onLoadPost, onLoginUser } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(onLoadPost);
sagaMiddleware.run(onLoginUser);

export default store;
