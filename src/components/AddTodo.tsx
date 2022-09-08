import React, { useEffect, useState } from "react";
import { ITodo } from "../types";
type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

export const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      content: e.currentTarget.value,
    });
  };

  return (
    <form
      className="flex justify-around items-center p-4"
      onSubmit={(e) => saveTodo(e, formData)}
    >
      <div>
        <div>
          <label htmlFor="name">Content:</label>
          <input
            className="border-2 p-2 m-2"
            required={true}
            minLength={3}
            onChange={handleForm}
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
