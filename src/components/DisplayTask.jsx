import React from 'react'
import 'primeicons/primeicons.css';
        

function DisplayTask({toggleFinished, showFinished, todos, handleEdit, handleDelete, handleCheckbox}) {
  return (
    <>
    {/* It is used to show the incompleted tasks  */}
     <input className='my-4'  onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-full mx-auto my-2'></div>
         <h2 className='text-2xl font-bold'>Your Todos</h2>
         <div className="todos">
            {/* This is to show the task if there is no task it will display no todo to display  */}
          {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
          {todos.map(item=>{

          return (showFinished ||!item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between bg-white rounded-lg px-4 py-2 text-gray-600"}>
            <div className='flex gap-5'> 
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <div className={item.isCompleted?"line-through bg-green-300":""}>{item.todo}</div>
            </div>
            <div className="buttons flex h-full">
                {/* It is used to edit the existing task  */}
              <button onClick={(e)=>handleEdit(e, item.id)} className='pi pi-pencil mx-2 hover:border-2 border-black'></button>
              {/* It is used to delete a task  */}
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='pi pi-trash mx-2 hover:border-2 border-black'></button>
            </div> 
          </div>
          })}
         </div>
    </>
  )
}

export default DisplayTask
