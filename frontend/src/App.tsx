import React, {useState} from 'react';
import './App.css';
import Loader from './components/Loader';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './Routes';
import { userLogin } from './auth';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(true)

  const login=(data:any)=>{
   if(userLogin(data)){
    setIsLoggedIn(true)
   }
  }

  const logout =()=>{
    setIsLoggedIn(false);
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-2">
      <BrowserRouter>
      { 
        isLoggedIn ? (
          <>
          <Sidebar logout={logout}/>
          <DashboardRoutes/>
          </>
        ) : (
          <>
          <Login loginHandler={login}/>
          </>
        )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
