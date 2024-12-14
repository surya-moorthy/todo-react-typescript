
import './App.css'
import {TodoInput} from "./components/TodoInput"
import { TaskProvider } from './components/TaskContext'
import TodoStats from './components/TodoStats'
import TodoCard from './components/TodoCard'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <div className="" >
         <TaskProvider>
         <TodoInput/>
         <TodoStats/>
         <TodoCard/>
         <TodoList/>
         </TaskProvider> 
    </div>
  )
}

export default App
