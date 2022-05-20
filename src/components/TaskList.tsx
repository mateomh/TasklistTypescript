import { Task } from "../models/task_model";
import TaskCard from "./TaskCard";
import { Actions } from "../models/actions_model";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<Actions>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks
}) => {
  return(
    <div className="container">
      <Droppable
        droppableId="todoList"
      >
        {(provided) => (
          <div
            className="todo"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todo_header">
              Active Tasks
            </span>
            {tasks.map((task, index)=>(
              <TaskCard
                index={index}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                key={task.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable
        droppableId="completeList"
      >
        {(provided)=> (
          <div
            className="complete"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="complete_header">
              Completed Tasks
            </span>
            {completedTasks.map((task, index)=>(
              <TaskCard
                index={index}
                task={task}
                tasks={completedTasks}
                setTasks={setTasks}
                setCompletedTasks={setCompletedTasks}
                key={task.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskList