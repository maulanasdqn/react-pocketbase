import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";
import ApiService from "./services/api.service";
import TokenService from "./services/token.service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ApiService.init(import.meta.env.VITE_API_URL);

if (TokenService.getToken()) {
  ApiService.setHeader();
} else {
  ApiService.removeHeader();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
