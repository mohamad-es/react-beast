import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/shared/dark-mode/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./features/home/HomePage.tsx";

import "./index.css";
import Layout from "./components/shared/layout/Layout.tsx";
import DemoPage from "./features/demo/DemoPage.tsx";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
