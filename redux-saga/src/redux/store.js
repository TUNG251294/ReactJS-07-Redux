import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSaga";

// Apply middleware
const saga = createSagaMiddleware();
// Đăng kí reducer cho redux quản lí
const store = createStore(rootReducer, applyMiddleware(saga));
// Chạy middleware cho redux để chạy các effect tại dòng code
saga.run(rootSaga);

export default store;