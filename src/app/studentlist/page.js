import Link from 'next/link'
import React from 'react'

const studentlist = () => {
  return (
    <main>
        <h1>student list</h1>
            <ul>
                <li>
                    <Link href="/studentlist/anil">Anil</Link>
                </li>
                <li>
                    <Link href="/studentlist/sam">Sam</Link>
                </li>
                <li>
                    <Link href="/studentlist/peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/bruce">Bruce</Link>
                </li>
            </ul>
    </main>
  )
}

export default studentlist