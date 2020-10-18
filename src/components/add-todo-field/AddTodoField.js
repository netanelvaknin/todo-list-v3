import React, { useContext, useState } from "react";
import { TextField, Snackbar } from "@material-ui/core";
import useInputState from "../../utils/hooks/useInputState";
import TodosContext from "../../context/todos/todosContext";
import RootContext from "../../context/root/rootContext";
import MuiAlert from "@material-ui/lab/Alert";
import {
  useStyles,
  useAlertStyles,
  FormStyle,
  AddButton,
  SlideTransition,
} from "./AddTodoFieldStyle";
import useSmallScreen from "../../utils/hooks/useSmallScreen";

export const AddTodoField = () => {
  const isSmallScreen = useSmallScreen();
  const alertClasses = useAlertStyles();
  const todoContext = useContext(TodosContext);
  const rootContext = useContext(RootContext);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [value, handleChange, resetInput] = useInputState();
  const classes = useStyles({ isSmallScreen });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.length || value.trim() === "") {
      rootContext.setError("Empty todo is not allowed");
      setShowErrorAlert(true);
    } else {
      todoContext.addTodo(value);
      setShowErrorAlert(false);
      rootContext.setError("");
      resetInput();
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowErrorAlert(false);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <TextField
        value={value}
        autoFocus
        classes={{ root: classes.root }}
        variant="outlined"
        placeholder="New todo"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <AddButton type="submit" variant="contained">
              Add
            </AddButton>
          ),
        }}
      />

      <Snackbar
        open={showErrorAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
        TransitionComponent={SlideTransition}
      >
        <MuiAlert
          classes={{ filledError: alertClasses.filledError }}
          severity="error"
          variant="filled"
        >
          {rootContext.error}
        </MuiAlert>
      </Snackbar>
    </FormStyle>
  );
};

export default AddTodoField;
