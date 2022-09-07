import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <div className='mx-auto py-4 px-2 container min-h-screen'>
      { children }
    </div>
  )
}
