import React from 'react'
import { UserAuth } from '../context/AuthContext';

function Profile() {
  const centralised = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
  }
  const {user} = UserAuth();
  
  return (
    <div style={centralised}>
      <h2>Profile</h2>
      <div> {user.email}</div>
      <div> {user.displayName}</div>
      <div>
        <img src={user.photoURL} alt="person" />
      </div> 
    </div>
  )
}

export default Profile