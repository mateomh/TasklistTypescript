import { Actions } from "../models/actions_model";
import { Task } from "../models/task_model";

export const taskReducer = (state: Task[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [ 
        ...state,
        {id: Math.random(), text: action.payload, isDone: false} 
      ]
    case "remove":
      return state.filter((task) => task.id!== action.payload);
    case "done":
      return state.map((task) => 
        task.id === action.payload ? {...task,isDone: !task.isDone} : task)
    case "edit":
      return state.map((task) => 
        task.id === action.payload.id ? {...task,text: action.payload.editedText} : task)
    default:
      return state;
  }
}