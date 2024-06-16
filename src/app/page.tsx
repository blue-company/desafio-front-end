"use client"

import { Login } from "@/components/Login/Login"
import bg from "../components/assets/CardBg.svg"
import Head from "next/head"

export default function Home() {

  return (
    <main className="flex items-center justify-center h-screen w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
        <Login />
    </main>
  )
}
