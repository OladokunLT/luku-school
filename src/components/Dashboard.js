import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import  "../css/customstyle.css"
import exam from "../assets/exam.svg"

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
    <div className='dashboard'>
    
      <div className='welcome'>
        <div className='greet-section'>
          <div>
            <p className='welcome-msg'>Welcome <b>{user && user.email}</b></p>
            <p>You have logged in to dashboard. Proceed to your course or view your profile</p>
          </div>
          <div className='welcome-img'>
            <img src={exam}  alt="student sitting and holding book" />
          </div>
        </div>
      </div>

      <section className='nav'>
        <nav className="side-nav">
          <Link to='/dashboard'><div>Dashboard</div></Link>
          <Link to='courses'><div>Courses</div></Link>
          <Link to='profile'><div>Profile</div></Link>
          <button className="btn-signout" onClick={handleSignout}> Logout </button>
        </nav>

        <main>
          <article className='text-area'>
            <Outlet />
          </article>
        </main>
      </section>
    
    </div>
  )
}

export default Dashboard