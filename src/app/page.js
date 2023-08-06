'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
    const [name, setName] = useState("anil")
    const fun = ()=>{
      setName("siddhu")
    }
    
  const router = useRouter();

  return ( 
    <main className={styles.main}>
      <h1>the admin access is for {name}</h1>
      <button onClick={fun}>click me</button>
      <br></br>
      <Link href="/about">go to about page</Link>
      <br></br>
      <Link href="/login">go to login page</Link>
      <br>
      </br>
      <button onClick={()=> router.push("/login")}>click to go to login page</button>
      <br/>
      <button onClick={()=>router.push("/about")}>click here to go to about page</button>
      <br/>
       <User name="vedant" />
      <User name="aryan"/> 
    </main>
  )
}

const User = (props) =>{
  return(
    <div>
      <h2>User name is {props.name} </h2>
    </div>
  )
}