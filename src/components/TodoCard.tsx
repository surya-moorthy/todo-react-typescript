
import { useTextContext } from './TaskContext'
import { TaskStatus } from '../types/types';
import { Button } from './ui/button';

export default function TodoCard() {
  const { state , dispatch} = useTextContext();
   const  setFilter = (filter : TaskStatus) =>{
    dispatch({type : "SET_FILTER" , payload : filter});
  }
  return (
    <div>
        <Button onClick={ () =>{setFilter('all')} }
            variant= {state.filter === 'all' ? 'default' : 'outline'}>
              All
        </Button>
        <Button onClick={ () =>{setFilter('completed')} }
            variant= {state.filter === 'completed' ? 'default' : 'outline'}>
              Completed
        </Button>
        <Button onClick={ () =>{setFilter('active')} }
            variant= {state.filter === 'active' ? 'default' : 'outline'}>
              Active
        </Button>
        
    </div>
  )
}
