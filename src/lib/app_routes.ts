import Layout from "@/components/layout/Layout";
import DashboardPage from "@/features/dashboard/page";
import DemoPage from "@/features/demo/DemoPage";
import LoginPage from "@/features/login/page";
import { createBrowserRouter } from "react-router";

export const app_routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
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
