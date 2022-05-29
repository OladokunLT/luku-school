import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



function Dashboard() {
  const { user, signout } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async() => {
    try {
      await signout();
      navigate("/");
      console.log("You are signed out")
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <nav className="side-nav">
        <Link to='#'><div>Dashboard</div></Link>
        <Link to='courses'><div>Courses</div></Link>
        <Link to='profile'><div>Profile</div></Link>
        <button onClick={handleSignout}> Logout </button>
      </nav>        
      <main>
        <article className='text-area'>
          <h1>Welcome <em>{user && user.email}</em></h1>
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