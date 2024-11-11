import React, { useState } from 'react';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (todo) => {
    setEditText(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editText, text: newText }));
    setEditText(null);
    setNewText("");
  };

  return (
    <>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
          key={todo.id}
        >
          {editText === todo.id ? (
            <div className="flex items-center w-full">
              <input
                type="text"
                className="flex-grow bg-zinc-800 px-4 py-2 rounded text-white border-2 border-white"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                onClick={handleUpdate}
                className="ml-4 text-green-500 hover:text-green-700"
              >
                Save
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              <span className="flex-grow">{todo.text}</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleEdit(todo)}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <ion-icon name="pencil-sharp"></ion-icon>
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default Todos;
