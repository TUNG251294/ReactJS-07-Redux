import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {LOGIN, LOGIN_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS} from '../redux/action';

const BaseURL = "https://jsonplaceholder.typicode.com/users";
//function*, yield có tác dụng như async, await
function* getUser(action){
    try{
        const response = yield axios.get(BaseURL)
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
        yield put({type: FETCH_USER_SUCCESS, payload: response.data})
    } catch(error){
        console.log("error - getUser : ", error)
    }
}

// Kiểm tra thông tin đăng nhập có đúng không, nếu đúng thì thực hiện 2 dispatch
function* authSagaFun(action){
    const user = action.payload;
    if(user.username === "admin" && user.password === "admin"){
        yield put({type: LOGIN_SUCCESS, payload: user})
        yield put({type: FETCH_USER, payload: {}})
    }
}
// có nhiệm vụ lắng nghe action và xử lí gọi hàm tương ứng
export default function* rootSaga(){
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
}

