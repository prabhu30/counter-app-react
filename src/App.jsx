import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleIncrement() {
    setErrorMessage(null);
    count < 5 ? setCount(count + 1) : setErrorMessage('Cannot increment further');
  }

  function handleDecrement() {
    setErrorMessage(null);
    count > 0 ? setCount(count - 1) : setErrorMessage('Cannot decrement further');
  }

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold mt-12'>Counter App using React</h1>

      <p className='mt-8 mb-3 text-xl text-blue-800 underline'>Instructions</p>
      <ul className='flex flex-col gap-2'>
        <li>Limits are 0 to 5 (both inclusive)</li>
        <li>If you try to increment above 5, error will be shown</li>
        <li>If you try to decrement below 0, error will be shown</li>
      </ul>

      <hr className='w-96 mt-6 mx-auto h-1 bg-slate-500'/>

      <p className='mt-8 mb-4 text-xl'>Count : {count}</p>
      
      <button 
      className='text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400'
      onClick={handleIncrement}>+</button>
      
      <button 
      className='text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400 ml-3'
      onClick={handleDecrement}>-</button>

      <p className='mt-6 text-red-600 text-xl'>{errorMessage}</p>

      <footer className='absolute bottom-6 w-full text-center text-[#6b7280]'>&#169; 2024 Prabhu Kalyan Korivi. All Rights Reserved.</footer>
    </div>
  )
}

export default App