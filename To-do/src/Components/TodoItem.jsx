import React from 'react'

export const TodoItem = ({text}) => {
  return (
    <>
     <div className='flex items-center justify-between gap-2'>
        <label className='hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none'>{text}</label>
        <div>
            <svg className='hover:fill-red-700' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
     </div>
    </>
  )
}
