import React from 'react'
import { Input, Button } from './index';

function ModifyCount({ type, defaultValue, operation }) {
  return (
    <div className='flex mt-6 mb-4 justify-center'>
        <Input 
        defaultValue={defaultValue} 
        className={type == "updateCount" ? 'count-limit-input' : 'change-by-number'}/>

        <Button 
        classNames={`px-3 py-1 bg-slate-500 border-2 border-slate-500 rounded-lg ml-2 text-white hover:bg-slate-50 hover:text-black`}
        text={ type == "updateCount" ? "Update Count Limit" : "Change Count By"} 
        handleClick={operation} />
    </div>
  )
}

export default ModifyCount