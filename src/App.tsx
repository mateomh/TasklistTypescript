import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './models/task_model';
import { taskReducer } from './reducers/reducers';
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [tasks, dispatch] = useReducer(taskReducer, []);


  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      dispatch({type: "add", payload: todo});
      setTodo("");
    }
  }

  return (
    <DragDropContext
      onDragEnd={() =>{}}
    >
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
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
