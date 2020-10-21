import React from "react";
import styled from "styled-components/macro";
import {
  Dialog,
  Typography,
  Button,
  Checkbox,
  Slide,
  SlideProps,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { ReactComponent as RemoveIcon } from "../icons/delete-icon.svg";
import { mobile, tablet } from "../../../utils/screen-sizes";

export const Transition = React.forwardRef<unknown, SlideProps>(
  (props, ref) => <Slide direction="up" ref={ref} {...props} />
);

interface AskAgainDialogProps {
  TransitionComponent: TransitionProps;
}
export const AskAgainDialog = styled(Dialog)<AskAgainDialogProps>`
  .MuiPaper-root {
    padding: 2rem;
  }
`;

export const AskAgainTitle = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;

  @media ${mobile} {
    margin: 1rem;
  }
`;

export const AskAgainButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 3rem auto 0;

  @media ${mobile} {
    width: 100%;
  }
`;

export const TodoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  width: 30%;

  @media ${tablet} {
    width: 47%;
  }

  @media ${mobile} {
    width: 95%;
  }
`;

const CommonButton = styled(Button)`
  &,
  &:hover {
    width: 17rem;
    height: 5rem;
    margin: 1rem;

    .MuiButton-label {
      color: white;
      font-size: 1.3rem;
    }
  }
`;

export const IamSureButton = styled(CommonButton)`
  &,
  &:hover {
    background: ${(props) => props.theme.palette.error.main};
  }
`;

export const IwillKeepButton = styled(CommonButton)`
  &,
  &:hover {
    background: ${(props) => props.theme.palette.success.main};
  }
`;

export const CompletedCheckbox = styled(Checkbox)`
  .MuiSvgIcon-root {
    font-size: 3rem;
    fill: ${(props) => props.checked && props.theme.palette.success.main};
  }
`;

export const RemoveButton = styled(RemoveIcon)`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
`;

interface TodoDescriptionProps {
  completed: boolean;
}
export const TodoDescription = styled.div<TodoDescriptionProps>`
  text-decoration: ${(props) => props.completed && "line-through"};
  background: #fff;
  color: ${(props) => props.theme.palette.text.primary};
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 5px;
  padding: 1rem;
  margin-right: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  word-wrap: break-word;
  flex: 3;
  height: 3rem;
  max-height: 6rem;
`;
