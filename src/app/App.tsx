import React from "react";
import TodosState from "../context/todos/TodosState";
import RootState from "../context/root/RootState";
import { Header, AddTodoField, Footer, Todos } from "../components/index";
import AppStyle from "./AppStyle";

function App() {
  return (
    <AppStyle>
      <Header />

      <RootState>
        <TodosState>
          <AddTodoField />
          <Todos />
        </TodosState>
      </RootState>

      <Footer />
    </AppStyle>
  );
}

export default App;
