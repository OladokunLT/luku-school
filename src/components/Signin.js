import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

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
        <p>
          Don't have an account yet? <Link to="/signup"><button>Sign up</button></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin