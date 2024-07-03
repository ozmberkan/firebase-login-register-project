import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


export default function Register() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

   const registerHandle = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Kayıt Başarılı.")
    } catch (error) {
        toast.error("Kayıt başarısız!");
    }
};

  return (
<div className='w-full h-screen flex justify-center items-center'>
    <form className='flex flex-col gap-y-5' onSubmit={registerHandle}>
        <input type="text" className='border px-5 py-2 rounded-md' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className='border px-5 py-2 rounded-md' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='w-full hover:bg-violet-500 hover:text-white mx-auto border mt-6 border-violet-600 text-black rounded-md px-5 py-2 '>Register</button>
        <Toaster  position="top-center"/>
        <Link to="/login" type='submit' className='w-full flex justify-center items-center hover:bg-emerald-500 hover:text-white mx-auto border mt-6 border-emerald-600 text-black rounded-md px-5 py-2 '>Log In</Link>
    </form>      
</div>
  )
}
