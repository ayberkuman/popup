import React, { useEffect, useState } from "react";
import { ITodo } from "../types";
type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

export const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<string>();

  const handleSubmit = ({ e, formData }) => {
    e.preventDefault();
    e.currentTarget.reset();
    saveTodo(e, formData);
  };

  return (
    <form
      className="flex justify-around items-center p-4"
      onSubmit={(e) => handleSubmit({ e, formData })}
    >
      <div>
        <div>
          <label className="text-xl" htmlFor="content">
            Content:
          </label>
          <input
            className="border-2 rounded-md text-black p-2 m-2"
            required={true}
            minLength={3}
            onChange={(e) => setFormData(e.currentTarget.value)}
            type="text"
            placeholder="Todo content"
            id="content"
          />
        </div>
      </div>
      <button
        className="bg-[#005bca] p-2 text-white border-2 rounded-md mx-4 "
        disabled={formData === undefined ? true : false}
      >
        Add Todo
      </button>
    </form>
  );
};
