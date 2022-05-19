import { Task } from "../models/task_model";
import TaskCard from "./TaskCard";
import { Actions } from "../models/actions_model";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<Actions>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return(
    <div className="task_list">
      {tasks.map((task)=>(
        <TaskCard
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default TaskList