import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./index.css";

import theme from "./theme/index";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <Suspense fallback={<div>Loading ...</div>}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </Suspense>,
  document.getElementById("root")
);
