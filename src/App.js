import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Courses from "./components/Courses";
import Profile from "./components/Profile";
import { AuthContextProvider } from './context/AuthContext';
// import Account from "./components/Account";

function App() {
  return (  
    <div className="App">
      {/* <h1>Firebase authentication</h1> */}
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />}> 
            <Route path='/dashboard/courses' element={<Courses />} />
            <Route path='/dashboard/profile' element={<Profile />} />
          </Route>
          {/* <Route path='/account' element={<Account />} /> */}
        </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
