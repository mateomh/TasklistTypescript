import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './models/task_model';
import { taskReducer } from './reducers/reducers';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

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

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    
    if(!destination) return;
    if(destination.droppableId === source.droppableId &&
      destination.index === source.index) return;
    
    let add;
    let active = tasks;
    let completed = completedTasks;
    console.log("ACTIVE",active);
    console.log("COMPLETED", completed);

    if(source.droppableId === 'todoList') {
      add = active.splice(source.index, 1);
      dispatch({type: "remove", payload: add[0].id});
    } else {
      add= completed.splice(source.index, 1);
    }

    if(destination.droppableId === 'todoList') {
      active.splice(destination.index, 0, add[0]);
    } else {
      completed.splice(destination.index, 0, add[0]);
      setCompletedTasks(completed);
    }
    console.log(add);
    
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
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
