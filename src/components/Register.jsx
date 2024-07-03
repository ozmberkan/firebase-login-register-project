import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')


    const registerHandle = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email,password)
    }


  return (
      <>
    <form>
        <input type="text" placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={registerHandle}>Register</button>
    </form>      
      </>
  )
}
