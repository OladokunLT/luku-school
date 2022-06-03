import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'; 
import "../css/Signin.css"

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {createUser} = UserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
     createUser(email, password)
      navigate("/dashboard")
    } catch (e) {
      setError(e.message);
      console.log(e.message)
    }
  };  

  return (
    <div>
      <div>
        <h1>Sign up an account</h1>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label>Email Address </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} /> 
        </div>
        <div className="field-group">
          <label >Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <button className='btn'>Sign up</button>
          {error && <p className='error'> {error} </p>}
        </div>
        <p>
          Already have an account? <Link to="/signin">Sign in</Link>  
        </p>
      </form>
    </div>
  )
}

export default Signup