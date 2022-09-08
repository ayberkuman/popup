import React from "react";
import { ITodo } from "../types";

export const TodoItem = ({
  todo,
  updateTodo,
  deleteTodo,
}: {
  todo: ITodo;
  updateTodo: Function;
  deleteTodo: Function;
}) => {
  const checkTodo: string = todo.isCompleted ? `line-through` : "";
  return (
    <div className="flex justify-around items-center rounded-xl border-2 p-4">
      <div className="font-semibold text-lg">
        <h1 className={checkTodo}>{todo.content.toUpperCase()}</h1>
      </div>
      <div className="grow p-2 rounded-3xl flex justify-end">
        <button
          onClick={() => updateTodo(todo)}
          className={
            todo.isCompleted
              ? `hidden`
              : "bg-[#00aa69] text-white border-2 p-2 mx-4"
          }
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-[#ca0000] p-2 text-white border-2 rounded-md mx-4 "
        >
          Delete
        </button>
      </div>
    </div>
  );
};
