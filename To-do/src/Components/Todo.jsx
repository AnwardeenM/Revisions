import React, { useState, useRef, useEffect } from 'react';
import {TodoItem} from './TodoItem';

const Todo = () => {

    const [todoList, SetTodoList]= useState(localStorage.getItem("todos") ? (JSON.parse(localStorage.getItem("todos"))):[]);

    const inputRef = useRef();

     //Update the LocalStorage
     useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todoList))
    },[todoList]);

     
    //Add Task to the Todo List
    const addTask =()=>{
        const inputText = inputRef.current.value.trim();
        if(inputText === ""){
            return null;
        }

        const newTodo = {
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        
        SetTodoList((prev) => [...prev,newTodo]);
        inputRef.current.value = "";
    }

    //Update the Task in the Todo List
   const toggleTask = (id)=>{
    SetTodoList((prev)=>{
        return prev.map((todo)=>{
            if(id===todo.id){
                return {...todo,isComplete:!todo.isComplete}
            }
            return todo;
        });
    });
   }

    //Deleting the Task from the Todo List
    const deleteTodo = (id)=>{
        SetTodoList((prev)=>{
            return prev.filter((todo)=> todo.id !== id)
        })
    }

   
  return (
    <>
        <div className='w-[30-rem]'> 
            
           <h1 className='text-lg my-2 font-medium text-amber-500'>Todo App for the practise</h1>
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <input ref={inputRef} type='text' className='py-3 px-4 w-full text-sm border focus:outline-none focus:border-amber-500' name='' id='' placeholder='Add your task'/>
                </div>
                <button className='py-3 px-4 bg-blue-600 text-white
                
                hover:bg-blue-700 text-sm font-medium rounded-sm border-none' onClick={addTask}>
                    Add Task
                </button>
            </div>
            <p className='my-3 text-sm text-zinc-400 px-1'>Fill the task details</p>
        </div>

        <div className='w-[30-rem] bg-white shadow py-6 px-4'>
            <fieldset className='space-y-3'>
                <legend className='text-pink-600 font-semibold'>List of tasks</legend>
                
                {/* list of items */}                
               {todoList.length===0 ? (
                <p className='text-gray-500 text-sm'>No Tasks Found</p>
               ):(
                todoList.map((todo,index)=>{
                    return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo} />
                })
               )}

                {/* End of the list */}
            </fieldset> 
        </div>
    </>
    
  )
};

export default Todo;
