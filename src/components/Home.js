import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"


function Home() {
  return (
    <div>
      <header className='header'>
        <div className="logo">LukuSchool</div>
        <nav className='top-right-login-btn'>          
          <Link to="/signin">
            <button className='btn'>Sign in</button>
          </Link>
        </nav>
        
      </header>

      <main>
        <h1>Welcome to LukuSchool</h1>
        <h3> learning at its peak</h3>
      </main>
    </div>
  )
}

export default Home