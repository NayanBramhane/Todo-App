// import { useState } from "react";
import { useReducer } from "react";

import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todosReducer from "./todosReducer";

//next todo item's id will be 4
let nextId = 4;
//array
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: true },
  { id: 3, text: "Learn React", done: false },
];
function App() {
// using useState
  // const [todos, setTodos] = useState(initialTodos);

  // function handleAddTodo(text) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: nextId++,
  //       text,
  //       done: false,
  //     },
  //   ]);
  // }

// using useReducer
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    function handleAddTodo(text) {
      dispatch({
        type: "add",
        id: nextId++,
        text,
      });
    }

function handleTodoChange(updatedTodo) {
    dispatch({
      type: "change",
      todo: updatedTodo,
    });
  }
  function handleTodoDelete(todoId) {
    dispatch({
      type: "remove",
      id: todoId,
    });
  }

  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
  );
}

export default App;
