import { Task } from "../models/task_model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskCard: React.FC<Props> = ({task, tasks, setTasks}) => {
  const [edit,setEdit] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleDone = (id: number) => {
    setTasks(tasks.map((task) => task.id? {...task,isDone: !task.isDone} : task));
  }

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id!== id));
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(tasks.map((task) => task.id === id ? {...task,text: editedText} : task));
    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  },[edit]);

  return(
    <form
      className="task_card"
      onSubmit={(e)=> handleEdit(e, task.id)}
    >
      {
        edit ?(
          <input
            ref={inputRef}
            value= {editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="taskcard_text"
          />
        ): (
          task.isDone ?(
            <s className="taskcard_text">{task.text}</s>
          ) : (
            <span className="taskcard_text">{task.text}</span>
          )
        )
      }
      <div>
        <span
          className="icon"
          onClick={() => {
            if(!edit && !task.isDone){
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
}

export default TaskCard;