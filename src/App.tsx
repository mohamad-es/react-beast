import { ModeToggle } from "./components/theme/mode-toggle";
import { AccordionDemo } from "./components/ui/accordion/AccordionDemo";
import { Button } from "./components/ui/button";

const AccordionGrid = () => {
  const data = [
    {
      title: "Product Information",
      content:
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 2-5 business days,while express shipping ensures delivery within 1-2 business days.",
      value: "item-1",
    },

    {
      title: "Shipping Details",
      content:
        "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
      value: "item-2",
    },

    {
      title: "Return Policy",
      content:
        "Our hassle-free return process includes free return shipping and full  processed within 48 hours of receiving the returned item.",
      value: "item-3",
    },
  ];

  return (
    <div className="border rounded-2xl p-4">
      <h2 className="text-2xl font-bold mb-5">Accordion</h2>
      <AccordionDemo list={data} />
    </div>
  );
};

const ButtonGrid = () => {
  return (
    <div className="border rounded-2xl p-4">
      <h2 className="text-2xl font-bold mb-5">Button</h2>
      <div className="flex flex-wrap gap-3">
        <Button>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <ModeToggle />
      <div className="grid grid-cols-3 gap-4 p-10">
        <AccordionGrid />
        <ButtonGrid />
      </div>
    </div>
  );
}

export default App;
