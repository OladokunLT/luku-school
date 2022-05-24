import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <header>
        <div className="logo">LOGO <span>LukuSchool</span></div>
        <nav className='top-right-login-btn'>          
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </nav>
        <hr />
      </header>
      <main>
        <h1>Welcome to LukuSchool</h1>
        <h3> learning at its peak</h3>
      </main>
    </div>
  )
}

export default Home