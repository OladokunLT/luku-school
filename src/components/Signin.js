import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
      <div>
        <h1>Sign in to your account</h1>
        <p>
          Don't have an account yet? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <form>
        <div className="">
          <label htmlFor="" >Email Address </label>
          <input type="email" /> 
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default Signin