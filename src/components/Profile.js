import React from 'react'
import { UserAuth } from '../context/AuthContext';

function Profile() {
  const {user} = UserAuth()
  return (
    <div>
      <main>Profile</main>
      <h3>Email: {user.email}</h3>
      <div>name: {user.displayName}</div>
      <img src={user.photoURL} alt="image" />
    </div>
  )
}

export default Profile