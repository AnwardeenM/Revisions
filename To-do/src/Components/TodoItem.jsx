import React,{useState,useRef} from 'react'


export const TodoItem = ({text,isComplete,id,toggleTask,deleteTodo,updateTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(text)
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  }
  const handleSave = () => {
    if (editText.trim() !== "") {
      updateTodo(id, editText.trim());
      setIsEditing(false);
    }
  }

  return (
    <>
     <div className='flex items-center justify-between gap-2'>
      {
        isEditing ? (
          <input
          ref={inputRef}
          className='flex-1 p-2 border rounded-md text-sm'
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onkeydown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') setIsEditing(false);
            }
          }/>
        ) : (
          <label
            className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through text-slate-600" : "" }`}
            onClick={()=>toggleTask(id)}      
        >
          {text}
        </label>
        )}

        <div className='flex gap-2'>
          {isEditing ? (
            <button
            className='text-white rounded px-2 py-1 rounded-md bg-green-500 hover:bg-green-600 text-xs'
            onClick = {handleSave}
            >
              Save
            </button>            
          ) : (
            <button
            className='px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-xs'
            onClick={handleEdit}
            >
              Edit
            </button>
          )}  
        </div>
        
        <div>
          <div className='size-[26px] hover:bg-teal-100 rounded-md' onClick={()=>deleteTodo(id)}>            
            <svg className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
         </div>
        </div>
     </div>
    </>
  )
}
