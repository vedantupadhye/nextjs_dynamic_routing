"use client"
import React from 'react'
import Link from 'next/link'
import "./login.css"
import { usePathname } from 'next/navigation'


const layout = ({children}) => {
  const pathName = usePathname();
  return (
    <div>
      { 
        pathName !== "/login/loginTeacher" ?

       <ul className='login-menu'>
          <li>
            <h4>Login Navbar</h4>
          </li>
        <li>
          <Link href = "/login">Login Main</Link>
        </li>
        <li>
          <Link href = "/login/loginStudent">Student Login</Link>
        </li>
        <li>
          <Link href = "/login/loginTeacher">Teacher login</Link>
        </li>
       </ul>
       :<Link href= "/login"> Click here to Main page</Link>
      }
        {children}
    
    </div>
  )
}

export default layout