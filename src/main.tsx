import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DeleteModalProvider } from "./contexts/DeleteModalProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <DeleteModalProvider>
      <App />
    </DeleteModalProvider>
  </QueryClientProvider>,
);
