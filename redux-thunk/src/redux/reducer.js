import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./action";

// initialState là stateTree của Store
const initialState = {
  users: [],
  userlogined: {}
};
//default parameter: khởi tạo giá trị ban đầu cho argument
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
  }
  return state;
};

export default rootReducer;