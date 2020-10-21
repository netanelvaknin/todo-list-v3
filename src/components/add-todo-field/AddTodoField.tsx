import React, { useContext, useState } from "react";
import { TextField, Snackbar } from "@material-ui/core";
import useInputState from "../../utils/hooks/useInputState";
import { TodosContext } from "../../context/todos/todosContext";
import RootContext from "../../context/root/rootContext";
import MuiAlert from "@material-ui/lab/Alert";
import {
  useStyles,
  useAlertStyles,
  FormStyle,
  AddButton,
} from "./AddTodoFieldStyle";
import useSmallScreen from "../../utils/hooks/useSmallScreen";
import { Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";

export function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export const AddTodoField = () => {
  const isSmallScreen = useSmallScreen();
  const alertClasses = useAlertStyles();
  const todoContext = useContext(TodosContext);
  const rootContext = useContext(RootContext);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [value, handleChange, resetInput]: any = useInputState();
  const classes = useStyles({ isSmallScreen });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!value.length || value.trim() === "") {
      rootContext?.setError("Empty todo is not allowed");
      setShowErrorAlert(true);
    } else {
      todoContext && todoContext.addTodo(value);
      setShowErrorAlert(false);
      rootContext?.setError("");
      resetInput();
    }
  };

  const handleCloseAlert = (e: React.SyntheticEvent<any, Event>) => {
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
          {rootContext?.error}
        </MuiAlert>
      </Snackbar>
    </FormStyle>
  );
};

export default AddTodoField;
