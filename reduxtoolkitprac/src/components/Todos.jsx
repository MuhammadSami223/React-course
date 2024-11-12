import React from 'react';
import { removeTodo } from '../features/todo/todoSlice';
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todos); // Selector
  const dispatch = useDispatch();

  return (
    <div className="mx-20 mt-10">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center p-3 mb-3 rounded-lg bg-pink-600"
        >
          <span className="text-white">{todo.text}</span> {/* Left side text */}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
          >
            X
          </button> {/* Right side delete button */}
        </div>
      ))}
    </div>
  );
};

export default Todos;
