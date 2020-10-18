import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    error: {
      main: "#ED4D4D",
    },
    success: {
      main: "#12B89B",
    },
    text: {
      primary: "#6C7280",
      secondary: "#C1C5CC",
    },
  },
});
