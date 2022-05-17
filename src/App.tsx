import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from './models/task_model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTasks([...tasks, {id: Math.random(), text: todo, isDone: false}]);
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
    </div>
  );
}

export default App;
