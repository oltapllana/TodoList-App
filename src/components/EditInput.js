import { useState } from "react";
import styled from "./EditInput.module.css";
import Button from "./UI/Button";
const EditInput = (props) => {

  const [title, setEnteredTitle] = useState(props.title)
  const [show, setShow] = useState(true)
  const editedText = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);

  };
  const saveEdit = (event) => {
    setShow(false);
    console.log(title);

  props.onSaveEdit(title)
  }
  
  
  return (
    <div>
        {show &&
        <div className={styled.background}>
          <div className={styled.edit__form}>
            <div className={styled.edit__input}>
              <label>Edit todo</label>
              <input type="text" onChange={editedText} value={title}/>
            </div>
            <Button onClick={saveEdit}>Save</Button>
          </div>
        </div>
        }
    </div>

  );
};
export default EditInput;
