import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { checkSession } from "../services/auth";

function App() {
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const sessionUser = await checkSession();
    setUser(sessionUser);
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) checkToken();
    return () => {}
  }, [])
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard user={user}/>}/>
      </Routes>
    </>
  )
}

export default App
