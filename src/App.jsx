import React, { useState, useEffect } from 'react'
import {auth} from './firebase'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import toast,{ Toaster } from 'react-hot-toast'


export default function App() {

  const [user, setUser] = useState('')
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });

    return () => unsubscribe();
  },[])



  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path='/register' element={user ? <Navigate to="/"/> : <Register/>}/>
        <Route path='/' element={user ? <Home user={user} /> : <Navigate to="/login"/>}/>
      </Routes>
    </Router>
  )
}
