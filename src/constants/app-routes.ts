import Layout from "@/components/layout/Layout";
import LoginPage from "@/features/auth/pages/login-page";
import DashboardPage from "@/features/dashboard/page";
import DemoPage from "@/features/demo/DemoPage";
import UserListPage from "@/features/user/page";
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
      {
        path: "/users",
        Component: UserListPage,
      },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
