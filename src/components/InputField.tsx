const InputField: React.FC = () => {
  return(
    <form className="task_input_form">
      <input 
        type="text"
        className="task_input"
        placeholder="Enter a task" 
      />
      <button className="task_button">Go</button>
    </form>
  );
}

export default InputField