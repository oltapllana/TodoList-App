import TodoItem from "./TodoItem";
import styled from "./TodoList.module.css";
const TodoList = (props) => {
  return (
    <ul className={styled.todo__list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onDelete={props.onDeleteItem}
         
        />
      ))}
    </ul>
  );
};
export default TodoList;
