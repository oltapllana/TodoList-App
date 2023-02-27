import Button from "./UI/Button";
import styled from "./TodoItem.module.css";
import { useState } from "react";
import EditInput from "./EditInput";
import deleteImg from '../assets/icons8-trash.svg'
import editImg from "../assets/icons8-edit.svg"
const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onDelete(props.id);
  }

  const [input, setInput] = useState(false)
  const getTitle = (enteredTitle) =>{
    console.log(enteredTitle);
    setNewTitle(enteredTitle);
  }
  const [newTitle, setNewTitle] = useState(props.title);

  const editItem = () => {
    
    console.log(props.id);
    setInput(!input);
    console.log('a:' +newTitle);
  };
  return (
    <div  className={styled.todo__item}>
        <li>
          {newTitle}
        </li>
        <div className={styled.button}>
            <Button  text="Delete" onClick={deleteTodo} onClassName='deleteEdit'><img src={deleteImg}/> </Button>
            <Button  text="Edit" onClick={editItem} onClassName='deleteEdit'> <img src={editImg}/> </Button>
        </div>
        {input && (<EditInput onSaveEdit={getTitle} title={newTitle}/>)}

    </div>
  );
};
export default TodoItem;
