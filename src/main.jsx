import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/font/fontStyle.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize a new QueryClient instance for managing server state
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // Wrap the app in QueryClientProvider to provide React Query functionality
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
