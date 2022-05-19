import { Task } from "../models/task_model";
import TaskCard from "./TaskCard";
import { Actions } from "../models/actions_model";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return(
    <div className="container">
      <div className="todo">
        <span className="todo_header">
          Active Tasks
        </span>
        {tasks.map((task)=>(
          <TaskCard
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            key={task.id}
          />
        ))}
      </div>
      <div className="complete">
        <span className="complete_header">
          Completed Tasks
        </span>
        {tasks.map((task)=>(
          <TaskCard
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList