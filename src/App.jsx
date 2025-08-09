import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
