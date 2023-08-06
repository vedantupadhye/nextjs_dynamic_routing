"use client"
import React from 'react'

const lecture = ({params}) => {
    console.log((params))
  return (
   <main>
    <h1>day of college : {params.lecture[0]}</h1>
    <h2>lecture number : {params.lecture[1]}</h2>
   </main>
  )
}

export default lecture