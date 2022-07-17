import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from './store/auth-context';
import "../src/custom.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthContextProvider><App /></AuthContextProvider>);
