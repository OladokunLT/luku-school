import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
      <section className='left-side'>
        <div>
          <h1>Student Login</h1>
          <p>Make sure your account is secure</p>
        </div>
        <div className=''>
          <img src="" alt="icon of student with laptop" className=''/>
        </div>
      </section>
      
      <form className='right-side'>
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
        <p>
          Don't have an account yet? <Link to="/signup"><button>Sign up</button></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin