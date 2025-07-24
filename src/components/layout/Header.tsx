import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./dark-mode/mode-toggle";

const Header = () => {
  return (
    <header className="flex px-4 justify-between h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="border rounded-md p-1" />
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
