import React,{useState} from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Banner from '../assets/Banner.svg'

export default function Login() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const loginHandle = async (e) => {
        e.preventDefault();
        try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Giriş Yapıldı", {
            id: "loginSuccess",
            duration: 2000,
            position: 'top-right',
            onClose: () => navigate('/') 
        });
        } catch {
        toast.error("Hata Mevcut, bilgileri kontrol edin.");
        }
    };

  return (
      <div className='w-full h-screen flex flex-col justify-center items-center container mx-auto'>
    <h1 className="my-6 font-black text-3xl  flex w-1/2 justify-start items-center text-violet-500">Giriş Yap</h1>
    <form className='flex flex-col gap-y-5 bg-violet-600  ring-2 ring-offset-2 z-0 overflow-hidden ring-violet-500 w-1/2 rounded-xl p-12 h-[500px] relative' onSubmit={loginHandle}>
        <img src={Banner} className=' absolute inset-0 -z-10 opacity-25' />
        <input type="text" className=' border px-5 py-3 bg-white rounded-md' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className=' border px-5 py-3 bg-white  rounded-md' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className='flex gap-x-5'>
            <button type='submit' className='w-full h-14 border bg-white text-violet-500 font-bold rounded-md hover:ring-2 ring-offset-2 ring-violet-400 transition-all duration-500'>Giriş Yap</button>
            <Link to="/register" type='submit' className='flex justify-center items-center w-full h-14 border bg-white text-violet-500 font-bold rounded-md hover:ring-2 ring-offset-2 ring-violet-400 transition-all duration-500'>Kayıt Ol </Link>
        </div>
    </form>      
      </div>
  )
}
