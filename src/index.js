import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/router";
import { Provider } from "react-redux";
import userStore from "./redux/userStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={userStore}>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </Provider>
  
);
