import { useState } from "react";

export const TodoItem = ({
  todo,
  content,
  isCompleted,
  id,
  handleDeleteTodo,
}: {
  todo: object;
  content: string;
  isCompleted: boolean;
  id: number;
  handleDeleteTodo: Function;
}) => {
  const [isDone, setIsDone] = useState(isCompleted);
  console.log(todo);
  return (
    <div className=" bg-red-400 flex justify-around p-4 py-8">
      <div>{content}</div>
      <button onClick={() => setIsDone(!isDone)}>
        {isDone ? "Completed" : "Not Completed"}
      </button>
      <div>{id}</div>
      <button onClick={() => handleDeleteTodo(id)}>delete</button>
    </div>
  );
};
