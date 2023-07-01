import React, {useState} from 'react';
import './App.css';
import Loader from './components/Loader';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './Routes';

function App() {
  const [isAuth, setIsAuth]= useState(true);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <BrowserRouter>
      { 
        isAuth ? (
          <>
          <Sidebar/>
          <DashboardRoutes/>
          </>
        ) : (
          <>
          <Login/>
          </>
        )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
