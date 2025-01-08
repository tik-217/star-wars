import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import "@mantine/core/styles.css";
import { MainRouter } from "./app/router";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/shared/store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
