/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  //defining state for text
  const [text, setText] = useState("");

  return (
    <>
      {/* 'value' is default value of input, on every keypress we are setting text to input contents */}
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(text); //passing text to onAddTodo prop
          setText(""); //resetting text once the todo has been added when we click on 'Add' button
        }}
      >
        Add
      </button>
    </>
  );
}
