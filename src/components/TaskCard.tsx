import { Task } from "../models/task_model";

interface Props {
  task: Task;
};

const TaskCard: React.FC<Props> = ({task}) => {
  return(
    <div>
      {task.text}
    </div>
  );
}

export default TaskCard;