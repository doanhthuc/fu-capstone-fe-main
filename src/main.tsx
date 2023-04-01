// Initial config
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query";
// CSS
import "./styles/style.css";
import "./styles/style.modify.css";
// ! Default config
import "./utils/config/axios.default"; // Axios default config
import queryClient from "./utils/config/queryClient.default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
