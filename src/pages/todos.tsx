import React, { useEffect, useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoItem } from "../components/TodoItem";
import { ITodo } from "../types";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../functions/ApiFunctions";
export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  /* get username ---------------------------------------------- */
  useEffect(() => {
    const localName = localStorage.getItem("username");
    setUsername(localName);
  }, []);
  /* get todos ---------------------------------------------- */
  const fetchTodos = () => {
    getTodos()
      .then(({ data }) => setTodos(data))
      .then(() => setLoading(false))
      .catch((err: Error) => console.log(err));
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  /* Crud handling functions---------------------------------------------- */
  const handleSaveTodo = (e: React.FormEvent, formData: string): void => {
    e.preventDefault();
    console.log(formData);
    addTodo(formData)
      .then(({ status }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setLoading(true);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setLoading(true);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (id: number): void => {
    deleteTodo(id)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setLoading(true);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };
  /* Crud handling functions end---------------------------------------------- */
  return (
    <main className="max-w-3xl m-auto flex flex-col gap-4 p-4">
      <h1 className="text-center text-5xl">My Todos</h1>
      <h2 className="text-center text-2xl">
        Welcome <span className="text-blue-500">{username}</span>
      </h2>
      <AddTodo saveTodo={handleSaveTodo} />
      {loading ? (
        <h1 className="text-center text-8xl">loading</h1>
      ) : (
        todos &&
        todos
          .reverse()
          .map((todo: ITodo) => (
            <TodoItem
              key={todo.id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          ))
      )}
    </main>
  );
}
