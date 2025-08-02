import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import TopBar from './components/TopBar';
import Profile from './pages/Profile';

function App() {

  return (
    <>
      <TopBar />
      <Nav />
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
