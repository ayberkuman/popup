import axios, { AxiosResponse } from "axios";
import { ApiDataType, ITodo } from "../types";
const baseUrl: string = "https://631376c5b466aa9b0399f332.mockapi.io/";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTodo = async (
  formData: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "id"> = {
      content: formData,
      isCompleted: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/todos",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "isCompleted"> = {
      isCompleted: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/todos/${todo.id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (
  id: number
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/${id}`
    );
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};
