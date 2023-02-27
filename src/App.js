import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setEnteredTodos] = useState([]);
  const saveTodo = (enteredTodo) => {
    setEnteredTodos([enteredTodo, ...todos]);
  };
  const getId = (enterdId) => {
    setEnteredTodos((prevTodo) => {
      const newTodos = prevTodo.filter((todo) => todo.id !== enterdId);
      return newTodos;
    });
  };
  
 
 
  return (
    <div>
      <TodoInput onSave={saveTodo} />
      <TodoList todos={todos} onDeleteItem={getId} />
    </div>
  );
}

export default App;
