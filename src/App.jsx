import React, { useState, useEffect } from 'react'
// import {auth} from './firebase'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'


export default function App() {

  const [user,setUser] = useState('')


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}
