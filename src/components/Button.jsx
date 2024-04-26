import React from 'react'

function Button({ classNames, text, handleClick }) {
  return (
    <button 
    className={`${classNames}`} 
    onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button