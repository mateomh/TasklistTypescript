const InputField: React.FC = () => {
  return(
    <form className="task_input">
      <input 
        type="text"
        className="task"
        placeholder="Enter a task" 
      />
      <button className="task_button">Go</button>
    </form>
  );
}

export default InputField