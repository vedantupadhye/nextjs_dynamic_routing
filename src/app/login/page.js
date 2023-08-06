import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main>
    <h1 className='heading'> this is login page</h1>
    <br/>
    <br/>
    <Link href="/login/loginStudent">click here to move to Student login  section</Link>
    <br/>
    <Link href="/login/loginTeacher">click here to move to Teacher login section</Link>
    </main>
  )
}

export default page
