import { async } from '@firebase/util';
import React, { useState } from 'react'
import GoogleButton from "react-google-button"
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard")
    } catch (e) {
      setError(e.message);
      console.log(e.message)
    }
  }


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
      
      <form onSubmit={handleSubmit} className='right-side'>
        <div className="">
          <label>Email Address </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} /> 
        </div>
        <div className="">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button>Sign in</button>
        </div>
        <div>
          <strong>OR</strong>
          <GoogleButton
            onClick={handleGoogleSignIn}
          />  
          <p>
            Don't have an account yet? <Link to="/signup"><button>Sign up</button></Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signin