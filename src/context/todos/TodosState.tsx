import React, { useState } from "react";
import { TodosContext } from "./todosContext";
import { v4 as uuid } from "uuid";
import { TodoTypes } from "./todosContext";

interface TodosStateProps {
  children?: React.ReactNode;
}

export const TodosState = (props: TodosStateProps) => {
  const [todos, setTodos] = useState<any>([]);

  const addTodo = (title: string) => {
    if (title !== null && title.trim() !== "") {
      const newTodo = {
        id: uuid(),
        title,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id: number) => {
    const newTodos = todos && todos.filter((todo: TodoTypes) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCompletedState = (id: number) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos([...newTodos]);
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleCompletedState }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosState;
