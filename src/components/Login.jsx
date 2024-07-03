import React,{useState} from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

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
            duration: 2000, // 2 saniye boyunca göster
            position: 'top-right',
            onClose: () => navigate('/') // toast kapandığında yönlendir
        });
        } catch {
        toast.error("Hata Mevcut, bilgileri kontrol edin.");
        }
    };

  return (
      <div className='w-full h-screen flex justify-center items-center'>
    <form className='flex flex-col gap-y-5' onSubmit={loginHandle}>
        <input type="text" className='border px-5 py-2 rounded-md' placeholder='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className='border px-5 py-2 rounded-md' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='w-full hover:bg-violet-500 hover:text-white mx-auto border mt-6 border-violet-600 text-black rounded-md px-5 py-2 '>Log In</button>
        <Link to="/register" type='submit' className='w-full flex justify-center items-center hover:bg-emerald-500 hover:text-white mx-auto border mt-6 border-emerald-600 text-black rounded-md px-5 py-2 '>Register</Link>
    </form>      
      </div>
  )
}
