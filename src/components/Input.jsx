import React from 'react'

function Input({todo, handleChange, handleAdd}) {
  return (
    <>
        <div className="flex">
            {/* It is used to take input from the user  */}
          <input  onChange={handleChange} value={todo} type="text" className='w-full text-gray-500 rounded-full bg-slate-200 px-5 py-1' />
          {/* It is used to save the task  */}
          <button onClick={handleAdd} className='bg-slate-600 mx-2 text-black rounded-full hover:bg-slate-800  px-4 py-2 text-sm font-bold hover:text-white'>Save</button>
        </div>

    </>
  )
}

export default Input
