import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../hooks/useAxios";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

export const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = (): void => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err: Error) => console.log(err));
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const handleSaveTodo = (e: React.FormEvent, formData: any) => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 p-4 gap-4 max-w-5xl m-auto">
          <AddTodo handleSaveTodo={handleSaveTodo} />
          {todos &&
            todos.reverse().map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  content={todo.content}
                  isCompleted={todo.isCompleted}
                  handleDeleteTodo={handleDeleteTodo}
                  id={todo.id}
                  key={todo.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
