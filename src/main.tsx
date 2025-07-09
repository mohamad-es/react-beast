import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/shared/dark-mode/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./features/dashboard/page.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import Layout from "./components/shared/layout/Layout.tsx";
import DemoPage from "./features/demo/DemoPage.tsx";
import { Toaster } from "sonner";
import LoginPage from "./features/login/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/demo",
        Component: DemoPage,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
