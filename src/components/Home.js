import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css";
import hero from "../assets/hero.svg"


function Home() {
  return (
    <div className='home'>
      <header className='header'>
        <div className="logo">LukuSchool</div>
        <nav className='top-right-login-btn'>          
          <Link to="/signin">
            <button className='btn'>Sign in</button>
          </Link>
        </nav>
        
      </header>

      <main>
        <article className='home-article'>      
             LukuSchool provides for capacity development 
              in the O'level subjects by providing 
              training and mentorship to students.
          </article>
        <figure classname="home-fig">
          <img src={hero} width="100%" alt="person with book" />
        </figure>
      </main>
    </div>
  )
}

export default Home