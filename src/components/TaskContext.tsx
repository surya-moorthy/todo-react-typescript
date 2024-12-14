import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Task, TaskStatus } from '../types/types'

interface TaskState {
  tasks: Task[];
  filter: TaskStatus;
}

type TaskAction = 
  | { type: "ADD_TASK";    payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "SET_FILTER";  payload: TaskStatus }

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch(action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] }
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) }
    case "TOGGLE_TASK":
      return { ...state, tasks: state.tasks.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )}   
    case "SET_FILTER":
      return { ...state, filter: action.payload }
    default:
      return state;
  }
}

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
} | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filter: 'all',
  });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTextContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

