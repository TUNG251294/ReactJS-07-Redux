import '../App.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { preLogin } from "../redux/action";

function Login() {
  const [user, setUser] = useState({ username: '', password: ''});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // muốn đẩy event + data từ View sang ActionCreator(action.js) để tạo thành 1 action thì dùng 1 Hook 
  // useDispatch để tạo ra 1 method dispatch(method dispatch này khác dispatch của redux trong action.js)
  const userlogined = useSelector(state => state.userlogined);
  // quá trình từ Store trả state đã cập nhật về cho View, có dependency là `userlogined` đã thay đổi nên 
  // useEffect sẽ được gọi khi component được rendering
  const setValueForUser = (key, value) => {
    const newVal = { ...user, [key]: value };
    setUser(newVal);
  };

  const login = () => {
    dispatch(preLogin(user));
  };
  // đẩy state là `user` vào phương thức của ActionCreator(action.js) làm payload để tạo ra 1 action
  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);
  // useEffect sẽ kiểm tra dependencies khi component được rendering lại. Nếu giá trị của dependencies
  // thay đổi so với lần render trước đó, useEffect sẽ được gọi lại, ở đây khi reload đã làm thay đổi `userlogined`
  
  return (
    <div className="App">
      <form>
        <label>Username</label>
        <input id="un" name="username" type="text"
          onChange={e => setValueForUser("username", e.target.value)}/><br/>

        <label>Password</label>
        <input id="pw" name = 'password' type="password" 
          onChange={e => setValueForUser("password", e.target.value)}/><br/>

        <button type="button" onClick={() => {login()}}>Login</button>
      </form>
    </div>
    
  );
}
export default Login;

// có thể rút gọn code như sau:
// onChange={setValueForUser}
// const setValueForUser = (e) => {
//   setUser(...user,[e.target.name]: e.target.value);
// }