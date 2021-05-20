import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Reducer from "../Reducer";
import { onLoadPost } from "../saga";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(Reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(onLoadPost);

export default store;
