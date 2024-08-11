import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-8xl'>404</h1>
      <h2 className='font-extrabold text-6xl'>Page Not Found</h2>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
