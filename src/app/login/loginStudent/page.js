"use client"
import { useRouter } from 'next/navigation'
import React from 'react'



const loginStudent = () => {

 const router = useRouter();
  return (
    <div>
      <h1 className='heading'> This is Student Login</h1> 
      <br/>
      <br/>
    <button onClick={()=>router.push("/login/loginTeacher")}>click here to go to Teacher login</button>
    </div>
  )
}

export default loginStudent