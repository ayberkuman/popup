import axios from "axios";

axios.defaults.baseURL = "https://631376c5b466aa9b0399f332.mockapi.io/";

export const getTodos = async () => {
  try {
    const response = await axios.get("/todos");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (formData) => {
  try {
    const todo = {
      content: formData.content,
      isCompleted: false,
    };
    const saveTodo = await axios.post("/todos", todo);
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

/* export const updateTodo = async (todo) => {
  try {
    const todoUpdate = {
      status: true,
    };
    const updatedTodo = await axios.put(
      `${baseURL}/edit-todo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
*/
export const deleteTodo = async (id) => {
  console.log(`/todos/${id}`);
  try {
    const deletedTodo = await axios.delete(`/todos/${id}`);
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
