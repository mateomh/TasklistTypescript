import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from './models/task_model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  
  return (
    <div className="App">
      <h1 className='heading'>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
