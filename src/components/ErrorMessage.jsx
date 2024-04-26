import React from 'react'

function ErrorMessage({ message }) {
  return (
    <p className='mt-6 text-red-600 text-xl'>{message}</p>
  )
}

export default ErrorMessage