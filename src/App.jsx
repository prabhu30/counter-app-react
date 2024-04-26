import { useState } from 'react';

import { Input, Button, Instructions, ModifyCount, ErrorMessage, Footer } from './components/index';
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

      <Instructions countLimit={countLimit} />

      <ModifyCount 
        type="updateCount" 
        defaultValue={countLimit} 
        operation={handleUpdateCount} />

      <ModifyCount 
        type="changeByNumber" 
        defaultValue={changeByNumber} 
        operation={handleChangeByNumber} />
      
      <p className='mb-4 text-xl'>Count : {count}</p>
      
      <Button 
        classNames={`text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400`}
        handleClick={handleIncrement}
        text='+' />

      <Button 
        classNames={`text-2xl px-8 py-3 font-bold bg-gray-300 active:bg-gray-400 ml-3`}
        handleClick={handleDecrement}
        text='-' />

      <ErrorMessage message={errorMessage} />
      
      <Footer />  
    </div>
  )
}

export default App