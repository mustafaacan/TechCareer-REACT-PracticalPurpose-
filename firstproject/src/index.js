import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ComponentExample from "./components/classComponentExample.jsx";
import FunctionComponentExample from "./components/functionComponentExample.jsx";
import reportWebVitals from "./reportWebVitals";
import RouterBlog from "./RouterBlog.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.js";

// REDUX
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const componentRoot = ReactDOM.createRoot(document.getElementById("component"));
componentRoot.render(
  <React.StrictMode>
    <ComponentExample />
  </React.StrictMode>,
);

const funccomponentRoot = ReactDOM.createRoot(
  document.getElementById("funcComponent"),
);
funccomponentRoot.render(
  <React.StrictMode>
    <FunctionComponentExample />
  </React.StrictMode>,
);

const routerRoot = ReactDOM.createRoot(document.getElementById("router"));
routerRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* REDUX LOGIN*/}
      <Provider store={store}>
        {/* Content API for Theme from ThemeContext */}
        <ThemeProvider>
          <RouterBlog />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
