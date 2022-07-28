import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Web3Provider } from "./context/Web3Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Web3Provider>
);
