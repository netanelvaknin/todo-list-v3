import React, { useState } from "react";
import TodosContext from "./todosContext";
import { v4 as uuid } from "uuid";

export const TodosState = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    if (title !== null && title.trim() !== "") {
      const newTodo = {
        id: uuid(),
        title,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCompletedState = (id) => {
    const todosCopy = [...todos];
    const todoIndex = todosCopy.findIndex((todo) => todo.id === id);

    todosCopy[todoIndex].completed = !todosCopy[todoIndex].completed;
    setTodos([...todosCopy]);
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleCompletedState }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
