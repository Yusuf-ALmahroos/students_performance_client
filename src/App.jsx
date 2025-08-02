import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import TopBar from './components/TopBar';

function App() {

  return (
    <>
      <TopBar />
      <Nav />
      <Routes>
        <Route />
      </Routes>
    </>
  )
}

export default App
