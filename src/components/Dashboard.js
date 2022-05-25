import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div>
      <nav className="side-nav">
        <Link to='dashboard'><div>Dashboard</div></Link>
        <Link to='courses'><div>Courses</div></Link>
        <Link to='profile'><div>Profile</div></Link>
        <Link to='/'>Logout</Link>
      </nav>        
      <main>
        <article className='text-area'>
          <h1>Welcome <em>user email</em></h1>
        </article>
        <div className="icon-container">
          <img src="" alt="student sitting and holding book" />
        </div>
      </main>
      <Outlet />
    </div>
  )
}

export default Dashboard