"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const pages = () => {
  const router = useRouter();
  return (
    <main>
    <div>about section</div>
    <br/>
    <br/>
    <button onClick={()=>router.push("/about/aboutStudent")}>click here to access about Student</button>
    </main>
  )
}

export default pages