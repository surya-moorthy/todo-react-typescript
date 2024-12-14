import { useMemo } from "react";
import { useTextContext } from "./TaskContext"


const TodoStats = () =>{
    const {state} = useTextContext();
    const stats = useMemo(()=>{
        const total = state.tasks.length ;
        const completed = state.tasks.filter(task => task.completed).length
        const active =  total - completed;
        return {total , completed , active}
    },[state.tasks]);

    return (
        <div className='bg-slate-400 mt-4'>
            <p>No. of tasks total : {stats.total}</p>
            <p>No. of tasks Completed : {stats.completed}</p>
            <p>No. of tasks active : {stats.active}</p>

        </div>
    )
}


export default TodoStats