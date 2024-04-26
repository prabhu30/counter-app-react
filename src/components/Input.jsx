import React from 'react'

function Input({ defaultValue, className }) {
  return (
    <input 
    type="number" 
    className={`${className} px-3 py-1 border-2 border-gray-400 rounded w-36 focus:outline-none`}
    defaultValue={defaultValue} />
  )
}

export default Input