import { Task } from "../models/task_model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { Actions } from "../models/actions_model";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<Actions>;
  setCompletedTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskCard: React.FC<Props> = ({index, task, tasks, setTasks}) => {
  const [edit,setEdit] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleDone = (id: number) => {
    setTasks({type:"done", payload: id});
  }

  const handleDelete = (id: number) => {
    setTasks({type:"remove", payload: id});
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks({type: "edit", payload: {id, editedText}});
    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  },[edit]);

  return(
    <Draggable
      draggableId={task.id.toString()}
      index={index}
    >
      {(provided) => (
        <form
          className="task_card"
          onSubmit={(e)=> handleEdit(e, task.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
}

export default TaskCard;