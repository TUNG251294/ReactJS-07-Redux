import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import '../App.css'

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  // Hook chọn phần tử `userlogined` của Store và gán nó cho một biến tên là userlogined. 
  // Khi `userlogined` của Store thay đổi, Component sẽ render lại và cập nhật giá trị của userlogined
  const userlogined = useSelector(state => state.userlogined)
  
  //... destructuring phân rã state thành các field
  const handleInput = (key, value) =>{
    setUser({...user, [key]: value});
  }
  // gửi một action {type: "LOGIN", payload: user} tới kho Redux qua Hook useDispatch của Redux
  // Điều này sẽ kích hoạt một cập nhật state trong kho Redux, làm cho phần tử userlogined của Store được cập nhật
  const login = () => {
      dispatch({type: "LOGIN", payload: user})
  }
  
  // chạy qua userSaga đến Reducer trả về 2 state userlogined và users
  // useEffect là 1 Hook cho phép Component thực hiện các tác vụ phụ, như điều hướng đến một trang mới, sau một chu kỳ render
  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);

  return (
    <div className='App'>
      <label htmlFor='un'><p>Username</p></label>
      <input id = 'un' name = 'username' type = 'text' onChange={e => handleInput("username", e.target.value)}/><br/>
      <label htmlFor='pw'><p>Password</p></label>
      <input id = 'pw' name = 'password' type = 'password' onChange={e => handleInput("password", e.target.value)}/><br/>
      <button type = 'button' onClick={login}>Login</button>
      {/* () => {login(); */}
    </div>
  );
}

export default Login
