import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DeleteModalProvider } from "./contexts/DeleteModalProvider.tsx";
import { ModeProvider } from "./contexts/ModeProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ModeProvider>
    <QueryClientProvider client={queryClient}>
      <DeleteModalProvider>
        <App />
      </DeleteModalProvider>
    </QueryClientProvider>
  </ModeProvider>,
);
