import { useState } from "react";

export const AddTodo = ({ handleSaveTodo }: any) => {
  const [formData, setFormData] = useState() as any;

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      content: e.currentTarget.value,
    });
  };
  return (
    <form
      className="flex justify-around p-4 bg-red-200"
      onSubmit={(e) => handleSaveTodo(e, formData)}
    >
      <div className="flex p-4">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
      </div>
      <button disabled={!formData} className="bg-orange-600">
        Add Todo
      </button>
    </form>
  );
};
