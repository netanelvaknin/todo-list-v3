import React, { useContext, useState } from "react";
import TodosContext from "../../../context/todos/todosContext";
import { Zoom } from "@material-ui/core";
import {
  TodoStyle,
  Transition,
  AskAgainTitle,
  CompletedCheckbox,
  TodoDescription,
  RemoveButton,
  AskAgainDialog,
  AskAgainButtonsContainer,
  IamSureButton,
  IwillKeepButton,
} from "./TodoStyle";

export const Todo = ({ id, title, completed }) => {
  const context = useContext(TodosContext);
  const [open, setOpen] = useState(false);

  const askAgain = () => {
    setOpen(true);
  };

  const removeTodo = () => {
    context.removeTodo(id);
    setOpen(false);
  };

  const keepTodo = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Zoom in>
        <TodoStyle>
          <CompletedCheckbox
            color="default"
            checked={completed}
            onChange={() => context.toggleCompletedState(id)}
          />
          <TodoDescription completed={completed}>{title}</TodoDescription>
          <RemoveButton onClick={askAgain}>Remove</RemoveButton>
        </TodoStyle>
      </Zoom>

      <AskAgainDialog
        open={open}
        TransitionComponent={Transition}
        onBackdropClick={keepTodo}
      >
        <AskAgainTitle variant="h2">
          Are you sure you want to delete this todo ?
        </AskAgainTitle>

        <AskAgainButtonsContainer>
          <IamSureButton onClick={removeTodo}>REMOVE IT</IamSureButton>
          <IwillKeepButton onClick={keepTodo}>KEEP IT</IwillKeepButton>
        </AskAgainButtonsContainer>
      </AskAgainDialog>
    </React.Fragment>
  );
};

export default Todo;
