// import React from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./Features/todo";

export default function TodoComponent() {
  const [todo, setTodo] = useState();
  const [editindex, setEditindex] = useState(null);
  let dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  let data = useSelector((state) => {
    return state.todokey.todo;
  });

  const deleteHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const Edithandler = (index) => {
    setTodo(data[index]);
    setEditindex(index);
  };

  const handlerUpdate = () => {
    dispatch(updateTodo({ index: editindex, data: todo }));
    setEditindex(null);
    setTodo("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        {editindex !== null ? (
          <button onClick={handlerUpdate}>Update</button>
        ) : (
          <button onClick={handleSave}>Save Task</button>
        )}

        {data.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value}</h1>
              <button onClick={() => Edithandler(index)}> Edit</button>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
