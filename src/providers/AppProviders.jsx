import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { theme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyles";

export const AppProviders = ({ children }) => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  </Router>
);
