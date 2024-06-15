"use client"

import { Login } from "@/components/Login/Login"
import Image from 'next/image'
import loginImage from '/public/loginImage.svg'
import bg from "../components/assets/CardBg.svg"


export default function Home() {


  return (
    <main className="flex items-center justify-center h-screen w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
        <Login />
    </main>
  )
}
