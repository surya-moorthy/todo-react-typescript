import { Task } from "@/types/types";
import React, { memo } from "react";
import { useTextContext } from "./TaskContext";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "./ui/button";

const TodoItem : React.FC<{ task : Task}> = memo(({ task })=>{
    const {dispatch} = useTextContext();
  return (
  <li>
      <div className = "mt-4 bg-slate-400">
           <Checkbox 
           checked={task.completed}
           onCheckedChange={()=> ( dispatch({ type : 'TOGGLE_TASK' ,payload : task.id}))}
           className="bg-black text-stone-100"
           >tick</Checkbox>
           <div className= "flex flex-col">
           <label htmlFor={`task-${task.id}`}
             className = { task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
            </label>   
           <label htmlFor={`task-${task.id}`}
             className = { task.completed ? 'line-through text-gray-500' : ''}>
                {task.description}
            </label> 
            </div>
            <Button 
              variant={'destructive'}
              onClick={ () => {dispatch({ type : 'DELETE_TASK' , payload : task.id})}}>
                Delete
              </Button>

      </div>
  </li> 
  )

})

export const TodoList = () =>{

    const {state}  = useTextContext();
    const filterTasks = state.tasks.filter((task)=>{
        if (state.filter  === 'completed' ) return task.completed
        if (state.filter === 'active') return !task.completed
    })

    return (
       <ul>
          { filterTasks.map((task)=>(
               <TodoItem key={task.id} task={task}/>
          ))}
       </ul>
    )

}