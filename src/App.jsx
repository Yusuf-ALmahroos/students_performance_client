import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import TopBar from './components/TopBar';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <TopBar />
      <Nav />
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
