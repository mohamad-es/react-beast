import { DropdownMenuCheckboxes } from "./components/DropdownMenuCheckbox";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <ModeToggle />
      <DropdownMenuCheckboxes />
    </div>
  );
}

export default App;
