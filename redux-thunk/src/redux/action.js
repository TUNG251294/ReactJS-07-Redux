import axios from "axios";

// export const LOGIN = "LOGIN";
// export const FETCH_USER = "FETCH_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

// Đây là ActionCreator, nơi nhận 1 event kèm data, để tạo ra 1 action {type, payload}
// method dispatch đẩy action tới Reducer để lấy state trả về View, dispatch này được binding bởi middleware
// method dispatch có argument là 1 action(type, payload) đẩy đến (middleWare->) Reducer
export const preLogin = (payload) => {
  return async dispatch => {
    const { username, password } = payload;
    if (username === "admin" && password === "admin") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload
      });
      dispatch(getUser());
    } else {
      alert("login failure!");
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  };
};

// Cả 2 hàm action creator dùng thư viện Axios để tương tác với API và trả về kết quả bên trong đối tượng action
// tất cả code trong action creator là quá trình middleware