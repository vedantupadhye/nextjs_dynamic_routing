"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Teacher = () => {
    const router = useRouter();
  return (
    <main>
        <br/>
    <h1 className='heading'> This is Teacher login</h1>
    <br></br>
    <button onClick={()=>router.push("/login/loginStudent")}>click here to move to student login</button>
    <br></br>
   
    </main>
  )
}

export default Teacher