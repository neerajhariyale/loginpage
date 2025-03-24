import { Profiler, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignIn'
import ProfileSection from './pages/ProfileSection'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

function App() {

  return (
   
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/profile-section" element={<ProfileSection/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
          </Routes>
        </div>
      </Router>
  
  )
}

export default App
