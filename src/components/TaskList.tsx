import { Task } from "../models/task_model";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  return(
    <div className="task_list">
      {tasks.map((task)=>(
        <li>{task.text}</li>
      ))}
    </div>
  );
}

export default TaskList