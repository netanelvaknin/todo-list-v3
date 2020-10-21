import { makeStyles, Button } from "@material-ui/core";
import styled from "styled-components/macro";


export const FormStyle = styled.form`
  margin: 4rem 0 3rem;
`;

interface AddTodoFieldProps {
  isSmallScreen: boolean;
}

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    textAlign: "center",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: 0,
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1.6rem",
      width: (props: AddTodoFieldProps) => (props.isSmallScreen ? "20rem" : "34rem"),
      color: theme.palette.text.secondary,
      background: "#FFF",
      paddingRight: "8rem",
      borderRadius: "6px",
    },
    "& fieldset": {
      border: 0,
    },
  },
}));

export const AddButton = styled(Button)`
  &,
  &:hover {
    background: ${(props) => props.theme.palette.success.main};
    position: absolute;
    right: 1rem;

    .MuiButton-label {
      color: white;
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
`;

export const useAlertStyles = makeStyles((theme) => ({
  filledError: {
    backgroundColor: theme.palette.error.main,
    fontSize: "1.6rem",
  },
}));

