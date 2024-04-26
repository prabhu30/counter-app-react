import React from 'react'

function Instructions({ countLimit }) {
  return (
    <div>
        <p className='mt-4 mb-3 text-xl text-blue-800 underline'>Instructions</p>
        <ul className='flex flex-col gap-2'>
            <li>
            Limits are <span className='font-bold'>0</span> to <span className='font-bold'>{countLimit}</span> (both inclusive)
            </li>
            <li>
            If you try to increment above <span className='font-bold'>{countLimit}</span>, error will be shown
            </li>
            <li>
            If you try to decrement below <span className='font-bold'>{countLimit}</span>, error will be shown
            </li>
        </ul>

        <hr className='w-96 mt-6 mx-auto h-1 bg-slate-500'/>
    </div>
  )
}

export default Instructions