import React from 'react'
import "./App.css"
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import About from './components/About'


const App = () => {
  return (
   <>
   <Navbar />
   <MainPage />
   <About />
   </>
  )
}

export default App