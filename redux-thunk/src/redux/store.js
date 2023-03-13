import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

// store chỉ làm việc với rootReducer(rootReducer sẽ làm việc với các reducer # trong reducer.js)
// store được tạo bởi 2 tham số rootReducer và (middleware) thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;