interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return(
    <form className="task_input_form">
      <input 
        type="text"
        className="task_input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="task_button"
      >
        Go
      </button>
    </form>
  );
}

export default InputField