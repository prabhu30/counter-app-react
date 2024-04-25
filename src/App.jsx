import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countLimit, setCountLimit] = useState(5);
  const [changeByNumber, setChangeByNumber] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleIncrement() {
    setErrorMessage(null);
    count + changeByNumber <= countLimit ? setCount(count + changeByNumber) : setErrorMessage('Cannot increment further');
  }

  function handleDecrement() {
    setErrorMessage(null);
    count - changeByNumber >= 0 ? setCount(count - changeByNumber) : setErrorMessage('Cannot decrement further');
  }

  function handleUpdateCount() {
    const countLimitInputEle = document.querySelector('.count-limit-input');
    const updateCountValue = Number(countLimitInputEle.value);
    if (updateCountValue > 0) {
      setCountLimit(updateCountValue);
    }
    else {
      alert('Invalid Count Limit Value. Please input value greater than 0.');
      countLimitInputEle.value = 5;
    }
  }

  function handleChangeByNumber() {
    const changeByNumberInputEle = document.querySelector('.change-by-number')
    const changeByNumberValue = Number(changeByNumberInputEle.value);
    if (changeByNumberValue > 0 && changeByNumberValue <= countLimit) {
      setChangeByNumber(changeByNumberValue)
    } else {
      alert("Invalid change by number value. Please input value greater than 0 and less than count limit.");
      changeByNumberInputEle.value = 1;
    }
  }

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold mt-8'>Counter App using React</h1>

      {/* Instructions */}
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

      {/* Update Count Limit Section */}
      <div className='flex mt-6 mb-4 justify-center'>
            <input type="number" className='count-limit-input px-3 py-1 border-2 border-gray-400 rounded w-36 focus:outline-none' defaultValue={countLimit} />
            <button className='px-3 py-1 bg-slate-500 border-2 border-slate-500 rounded-lg ml-2 text-white hover:bg-slate-50 hover:text-black' onClick={handleUpdateCount}>Update Count Limit</button>
      </div>

      {/* Change Count By Section */}
      <div className='flex mt-2 mb-6 justify-center'>
            <input type="number" className='change-by-number px-3 py-1 border-2 border-gray-400 rounded w-36 focus:outline-none' defaultValue={changeByNumber} />
            <button className='px-3 py-1 bg-slate-500 border-2 border-slate-500 rounded-lg ml-2 text-white hover:bg-slate-50 hover:text-black' onClick={handleChangeByNumber}>Change Count By</button>
      </div>
      
      {/* Count */}
      <p className='mb-4 text-xl'>Count : {count}</p>
      
      {/* Increment Button */}
      <button 
      className='text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400'
      onClick={handleIncrement}>+</button>
      
      {/* Decrement Button */}
      <button 
      className='text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400 ml-3'
      onClick={handleDecrement}>-</button>

      {/* Error Message Section */}
      <p className='mt-6 text-red-600 text-xl'>{errorMessage}</p>

      {/* Copyright footer */}
      <footer className='absolute bottom-6 w-full text-center text-[#6b7280]'>&#169; 2024 Prabhu Kalyan Korivi. All Rights Reserved.</footer>
    </div>
  )
}

export default App