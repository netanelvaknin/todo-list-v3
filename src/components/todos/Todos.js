import React, { useContext } from "react";
import styled from "styled-components/macro";
import Todo from "./todo/Todo";
import TodosContext from "../../context/todos/todosContext";
import { mobile, tablet } from "../../utils/screen-sizes";

const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 95%;
  max-height: 47vh;
  overflow-y: auto;
  margin: 0 auto;

  @media ${tablet} {
    max-height: 60vh;
  }

  @media ${mobile} {
    max-height: 48vh;
    padding-bottom: 5rem;
  }
`;

const NothingTodoText = styled.p`
  font-size: 3.4rem;
  text-align: center;
  margin: 6rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: ${(props) => props.theme.palette.text.secondary};

  @media ${tablet} {
    font-size: 2.6rem;
  }

  @media ${mobile} {
    font-size: 2rem;
  }
`;

export const Todos = () => {
  const context = useContext(TodosContext);

  return (
    <TodosContainer existingTodos={context.todos.length}>
      {context.todos.length <= 0 ? (
        <NothingTodoText>
          Are you sure you have nothing to do ?{" "}
        </NothingTodoText>
      ) : (
        context.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      )}
    </TodosContainer>
  );
};

export default Todos;
