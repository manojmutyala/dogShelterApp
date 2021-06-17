import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import loginReducer from "../reducers/loginReducer";
import dataTable from "../reducers/dataTable";
import detailsReducer from "../reducers/detailsReducer";

const rootReducer = { loginReducer, dataTable, detailsReducer };

const reducer = combineReducers(rootReducer);

const middleware = [thunk, createLogger()];

const enhancers = compose(applyMiddleware(...middleware));

export default createStore(reducer, enhancers);
