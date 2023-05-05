import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await axios.get<Todo[]>(todoDataUrl);
  return response.data;
};

export const getTodoData = async (todo:  Todo) => {
  const responce = await axios.post(todoDataUrl, todo);
  return responce.data;
};

export const addTodoData = async (todo: Todo) =>  {
  const responce = await axios.post(todoDataUrl, todo);
  return responce.data;
}

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
}

export const updateTodoData = async (id: string, todo: Todo) => {
  const responce = await axios.put(`${todoDataUrl}/${id}`, todo);
  return responce.data;
}