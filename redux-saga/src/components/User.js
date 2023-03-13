import React from 'react'
import {useSelector} from 'react-redux'
import '../App.css'

function User() {
  const users = useSelector(state => state.users);

  const userlogined = useSelector(state => state.userlogined);
  

  return (
    <div className='App'>
      <p>Hello: {userlogined.username}</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User
