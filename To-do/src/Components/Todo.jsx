import React from 'react'

const Todo = () => {
  return (
    <>
        <div className='w-[30-rem]'> 
            
           <h1 className='text-lg my-2 font-medium text-amber-500'>Todo App for the practise</h1>
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <input type='text' className='py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-500' name='' id='' placeholder='Add your task'/>
                </div>
                <button className='py-3 px-4 bg-blue-600 text-white
                
                hover:bg-blue-700 text-sm font-medium rounded-sm border-none'>
                    Add Task</button>
            </div>
        </div>
    </>
    
  )
};

export default Todo;
