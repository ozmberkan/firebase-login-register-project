import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Home({user}) {



  const handleLogOut = async(e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      alert("Çıkış başarılı")
    } catch {
      alert("Bir takım hata mevcut kodları kontrol edin.")
    }
  }

  return (
    <div>

      Home , welcome back {user.email}
      
        <button onClick={handleLogOut} type='submit' className='w-full flex justify-center items-center hover:bg-emerald-500 hover:text-white mx-auto border mt-6 border-emerald-600 text-black rounded-md px-5 py-2 '>Sign Out</button>

    </div>
  )
}
