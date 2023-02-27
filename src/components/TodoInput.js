import Button from "./UI/Button"
import styled from './TodoInput.module.css'
import {useState} from 'react'
const TodoInput = (props) => {
    const [enteredTodo, setEnteredTodo] = useState('');
    const TodoHandler = (event) =>{
        console.log(event.target.value);
        setEnteredTodo(event.target.value)

    }
    const saveTodo = (event) =>{
        event.preventDefault();
        const newTodo = {
            title: enteredTodo,
            id: Math.random().toString()
        }
        props.onSave(newTodo)
        setEnteredTodo('')
    }
    return <form className={styled.form} onSubmit={saveTodo}>
        <div className={styled.controls}>
            <div className={styled.form__control}>
                <h2 className={styled.form__title}>Plan your day...</h2>
            </div>
            <div className={styled.form__control}>
                <label>Write a new Todo</label>
                <input type="text" placeholder="Write here..." onChange={TodoHandler} value={enteredTodo}/>
            </div>
        </div>
            <Button type="submit" >Add user</Button>
    </form>
}
export default TodoInput