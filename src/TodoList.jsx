/* eslint-disable react/prop-types */
/* export default function TodoList({ todos, onTodoChange, onTodoDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onTodoChange} onDelete={onTodoDelete} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo, onChange, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </>
  );
} */

import { useDispatch, useTodos } from "./TodosContext";

export default function TodoList() {
  const todos = useTodos();
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            todo: { ...todo, done: e.target.checked },
          });
        }}
      />
      {todo.text}
      <button
        onClick={() => {
          dispatch({
            type: "remove",
            id: todo.id,
          });
        }}
      >
        X
      </button>
    </>
  );
}
