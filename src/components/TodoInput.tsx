import React, { useCallback } from 'react'
import {useState} from 'react'
import {useTextContext} from './TaskContext'

export const TodoInput : React.FC = () =>{
 const [title, setTitle] = useState('');
 const [description,setDescription] = useState('');
 const { dispatch } = useTextContext();

 const handleSubmit = useCallback((e : React.FormEvent) =>{
      e.preventDefault();
      if(title.trim()){
         dispatch({
            type: 'ADD_TASK',
            payload : { id : Date.now().toString() , title ,description , completed : false},
         })
         setTitle('');
         setDescription('');
      }
 },[title,description,dispatch])
 

    return (
   <form onSubmit={handleSubmit}>
         <div className="flex flex-row justify-between w-full h-48 bg-slate-500 items-center ">
            <div className = "border-style:solid flex flex-col gap-2 px-4 space-y-2 w-full">
               <input type="text" 
               name= "title"
               value={title}
               onChange={(e)=>{
                  setTitle(e.target.value)
               }}
               placeholder="Add a new Task"
               className="bg-slate-200 border-dashed border-gray-900 text-neutral-900 h-12 text-xl font-serif"
               />
               <input type="text" 
               name= "Description"

               onChange={(e)=>{
                  setDescription(e.target.value)
               }} 
               value={description}
               placeholder="Add the Dscription"
               className="bg-slate-200 border-dashed border-gray-900 text-neutral-900 h-12 text-xl font-serif"
               />
            </div> 
           <div className= "p-4 w-32 h-16 bg-slate-950 text-amber-50 font-serif text-xl flex flex-col items-center justify-center">
           <button type="submit">Add Task</button>
           </div>
         </div>
   </form>
    )
}