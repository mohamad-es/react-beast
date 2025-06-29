import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
