import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Banner from '../assets/Banner.svg'


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
    <div className='w-full h-screen flex flex-col justify-center items-center container mx-auto'>
    <h1 className="my-6 font-black text-3xl  flex w-1/2 justify-start items-center text-violet-500">Kayıt Ol</h1>
    <form className='flex flex-col gap-y-5 bg-violet-600  ring-2 ring-offset-2 z-0 overflow-hidden ring-violet-500 w-1/2 rounded-xl p-12 h-[500px] relative' onSubmit={registerHandle}>
        <img src={Banner} className=' absolute inset-0 -z-10 opacity-25' />
        <input type="text" className=' border px-5 py-3 bg-white rounded-md' placeholder='e-posta giriniz..' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className=' border px-5 py-3 bg-white  rounded-md' placeholder='parola giriniz..' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex flex-col gap-y-5'>
            <button type='submit' className='w-full h-14 border bg-white text-violet-500 font-bold rounded-md hover:ring-2 ring-offset-2 ring-violet-400 transition-all duration-500'>Kayıt Ol</button>
            <Link to="/login" type='submit' className='flex justify-center items-center w-full h-14 border bg-white text-violet-500 font-bold rounded-md hover:ring-2 ring-offset-2 ring-violet-400 transition-all duration-500'>Hesabın var mı ? Giriş Yap</Link>
        </div>
    </form>      
      </div>
  )
}
