import React from 'react'

export default function Authlayout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-red-600 h-screen'>
      {children}
    </div>
  )
}
