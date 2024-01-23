import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../context/userDetails";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <App/>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
  </>
);
