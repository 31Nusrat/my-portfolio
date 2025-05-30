import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Project from './components/Project'
import CodingPlatform from './components/CodingPlatform'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Project/>
      <CodingPlatform/>
       <Contact/>

     
    </div>
  )
}

export default App