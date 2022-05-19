import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './models/task_model';
import { Actions } from "./models/actions_model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [tasks, setTasks] = useState<Task[]>([]);

  const taskReducer = (state: Task[], action: Actions) => {
    switch (action.type) {
      case "add":
        return [ 
          ...state,
          {id: Math.random(), text: action.payload, isDone: false} 
        ]
      case "remove":
        return state.filter((task) => task.id!== action.payload);
      case "done":
        return state.map((task) => 
          task.id === action.payload ? {...task,isDone: !task.isDone} : task)
      case "edit":
        return state.map((task) => 
          task.id === action.payload.id ? {...task,text: action.payload.editedText} : task)
      default:
        return state;
    }
  }

  const [tasks, dispatch] = useReducer(taskReducer, []);


  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      // setTasks([...tasks, {id: Math.random(), text: todo, isDone: false}]);
      dispatch({type: "add", payload: todo});
      setTodo("");
    }
  }

  return (
    <div className="App">
      <h1 className='heading'>Taskify</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        addTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={dispatch}
      />
    </div>
  );
}

export default App;
