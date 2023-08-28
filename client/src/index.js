import React from "react";
import { createRoot } from 'react-dom/client';
import "./main.scss";
import "./css/style.css"
import "./css/reset.css"
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  );

