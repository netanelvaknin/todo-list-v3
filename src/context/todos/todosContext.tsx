import React from "react";

export interface TodoTypes {
  id: number;
  title: string;
  completed: boolean;
}

export type TodosType = Array<TodoTypes>;
type removeTodoType = (id: number) => void;
type addTodoType = (title: string) => void;
type toggleCompletedStateType = (id: number) => void;

export type TodosContextType =
  | {
      todos: TodosType;
      removeTodo: removeTodoType;
      addTodo: addTodoType;
      toggleCompletedState: toggleCompletedStateType;
    }
  | undefined;

export const TodosContext = React.createContext<TodosContextType>(undefined);
