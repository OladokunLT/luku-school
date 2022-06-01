import React from 'react'
import { UserAuth } from '../context/AuthContext';

function Profile() {
  
  const {user} = UserAuth();
  
  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div>Email: {user.email}</div>
      <div>name: {user.displayName}</div>
      <div>
        <img src={user.photoURL} alt="person" />
      </div>
      
    </div>
  )
}

export default Profile