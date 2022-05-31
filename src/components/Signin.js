import React, { useState } from 'react'
import GoogleButton from "react-google-button"
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "../css/Signin.css"
import programmer from "../assets/programmer.svg"

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
    <div className='signin' >
      <section className='left-side'>
        <div>
          <h1>Student Login</h1>
          <p>Make sure your account is secure</p>
        </div>
        <div className='img-div'>
          <img src={programmer} width="100" alt="icon of student with laptop" className=''/>
        </div>
      </section>
      
      <form onSubmit={handleSubmit} className='right-side'>
        <h3>Sign in</h3>
        <div className="field-group">
          <label>Email Address </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} /> 
        </div>
        <div className="field-group">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="div-btn">
          <button className='btn'>Sign in</button>
        </div>
        <div>
        <p className='signup-link'>
          <strong>OR</strong>
        </p>
          <GoogleButton
            onClick={handleGoogleSignIn}
          />  
          <p className='signup-link'>
            Don't have an account yet? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signin