import { AccordionDemo } from "@/components/ui/accordion/AccordionDemo";
import { AlertDialogDemo } from "@/components/ui/alert-dialog/AlertDialogDemo";
import { BadgeDemo } from "@/components/ui/badge/BadgeDemo";
import { BreadcrumbDemo } from "@/components/ui/breadcrumb/BreadCrumbDemo";
import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/ui/card/CardDemo";
import { CarouselDemo } from "@/components/ui/carousel/CarouselDemo";
import { ComboboxDemo } from "@/components/ui/combobox/ComboboxDemo";
import { DropdownMenuDemo } from "@/components/ui/dropdown-menu/DropdownMenuDemo";
import { FormDemo } from "@/components/ui/form/FormDemo";
import { InputDemo } from "@/components/ui/input/InputDemo";
import { SelectDemo } from "@/components/ui/select/SelectDemo";
import { TabsDemo } from "@/components/ui/tabs/TabsDemo";
import { TextareaDemo } from "@/components/ui/textarea/TextareaDemo";
import { TooltipDemo } from "@/components/ui/tooltip/TooltipDemo";


const DemoPage = () => {
  const ThemeGrid = () => {
    const radius = [
      {
        className: "rounded-sm",
        name: "Rounded sm",
      },
      {
        className: "rounded-md",
        name: "Rounded md",
      },
      {
        className: "rounded-lg",
        name: "Rounded lg",
      },
      {
        className: "rounded-xl",
        name: "Rounded xl",
      },
      {
        className: "rounded-full",
        name: "Rounded full",
      },
    ];

    const colors = [
      {
        bg: "bg-primary ",
        foreground: "text-primary-foreground",
        text: "Primary",
      },
      {
        bg: "bg-secondary",
        foreground: "text-secondary-foreground",
        text: "Secondary",
      },
      {
        bg: "bg-muted",
        foreground: "text-muted-foreground",
        text: "Muted",
      },
      {
        bg: "bg-accent",
        foreground: "text-accent-foreground",
        text: "Accent",
      },
      {
        bg: "bg-destructive",
        foreground: "text-primary-foreground",
        text: "Destructive",
      },
    ];

    return (
      <div dir="ltr" className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Theme</h2>

        <h2 className="text-xl mb-2 mt-10">Rounded</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {radius.map((item) => (
            <div
              key={item.name}
              className={`${item.className} border text-center flex items-center justify-center w-40 h-40 rounded-2xl`}
            >
              <div className="font-bold text-2xl">{item.name}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl mb-2 mt-10">Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colors.map((item) => (
            <div
              key={item.text}
              className={`${item.bg} ${item.foreground} text-center flex items-center justify-center w-40 h-40 rounded-2xl`}
            >
              <div className="font-bold text-2xl">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Accordion</h2>
        <AccordionDemo list={data} />
      </div>
    );
  };

  const ButtonGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>default</Button>
          <Button variant={"secondary"}>secondary</Button>
          <Button variant={"destructive"}>destructive</Button>
          <Button variant={"outline"}>outline</Button>
          <Button variant={"ghost"}>ghost</Button>
          <Button variant={"link"}>link</Button>
        </div>
      </div>
    );
  };

  const AlertDialogGrid = () => {
    const data = {
      title: "آیا اطمینان دارید ؟",
      button: "Show Dialog",
      description:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      cancel: "cancel",
      submit: "Continue",
    };

    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Alert Dialog</h2>
        <AlertDialogDemo
          cancel={data.cancel}
          submit={data.submit}
          description={data.description}
          button={data.button}
          title={data.title}
        />
      </div>
    );
  };

  const BreadCrumbGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">BreadCrumb</h2>
        <BreadcrumbDemo />
      </div>
    );
  };

  const CarouselGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Carousel</h2>
        <div className="w-full flex gap-5 px-12">
          <CarouselDemo />
        </div>
      </div>
    );
  };

  const VerticalCarouselGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Vertical Carousel</h2>
        <div className="w-full flex h-full items-center gap-5 pb-12">
          <CarouselDemo carouselContentClassName="h-[200px]" carouselItemClassName="basis-1/3" orientation="vertical" />
        </div>
      </div>
    );
  };

  const MultipleCarouselGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Multiple Carousel</h2>
        <div className="w-full flex h-full items-center gap-5 p-12">
          <CarouselDemo carouselItemClassName="basis-1/3" />
        </div>
      </div>
    );
  };

  const ComboboxGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Combobox</h2>
        <ComboboxDemo />
      </div>
    );
  };

  const DropdownGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Dropdown</h2>
        <DropdownMenuDemo />
      </div>
    );
  };

  const InpuGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Input</h2>
        <div className="flex flex-col gap-5">
          <InputDemo />
        </div>
      </div>
    );
  };

  const TextareaGrid = () => {
    return (
      <div className="border rounded-xl p-4">
        <h2 className="text-2xl font-bold mb-5">Textarea</h2>
        <TextareaDemo />
      </div>
    );
  };

  const CardGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Card</h2>
      <CardDemo />
    </div>
  );

  const BadgeGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Badge</h2>
      <BadgeDemo />
    </div>
  );

  const TooltipGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Tooltip</h2>
      <TooltipDemo />
    </div>
  );

  const TabsGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Tabs</h2>
      <TabsDemo />
    </div>
  );

  const FormGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Form</h2>
      <FormDemo />
    </div>
  );

  const SelectGrid = () => (
    <div className="border rounded-xl p-4">
      <h2 className="text-2xl font-bold mb-5">Select</h2>
      <SelectDemo />
    </div>
  );

  return (
    <div className="p-10">
      <ThemeGrid />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <TabsGrid />
        <CardGrid />
        <AccordionGrid />
        <ButtonGrid />
        <AlertDialogGrid />
        <BreadCrumbGrid />
        <CarouselGrid />
        <VerticalCarouselGrid />
        <MultipleCarouselGrid />
        <BadgeGrid />
        <TooltipGrid />
        <FormGrid />
        <TextareaGrid />
        <InpuGrid />
        <SelectGrid />
        <ComboboxGrid />
        <DropdownGrid />
      </div>
    </div>
  );
};

export default DemoPage;
