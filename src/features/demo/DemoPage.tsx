import { AccordionDemo } from "@/components/ui/accordion/AccordionDemo";
import { AlertDialogDemo } from "@/components/ui/alert-dialog/AlertDialogDemo";
import { BreadcrumbDemo } from "@/components/ui/breadcrumb/BreadCrumbDemo";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "@/components/ui/carousel/CarouselDemo";
import { ComboboxDemo } from "@/components/ui/combobox";

const DemoPage = () => {
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

  const AlertDialogGrid = () => {
    const data = {
      title: "Are you absolutely sure?",
      button: "Show Dialog",
      description:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
      cancel: "cancel",
      submit: "Continue",
    };

    return (
      <div className="border rounded-2xl p-4">
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
      <div className="border rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-5">BreadCrumb</h2>
        <BreadcrumbDemo />
      </div>
    );
  };

  const CarouselGrid = () => {
    return (
      <div className="border rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-5">Carousel</h2>
        <div className="w-full flex gap-5 px-12">
          <CarouselDemo />
        </div>
      </div>
    );
  };

  const VerticalCarouselGrid = () => {
    return (
      <div className="border rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-5">Vertical Carousel</h2>
        <div className="w-full flex h-full items-center gap-5 pb-12">
          <CarouselDemo carouselContentClassName="h-[200px]" carouselItemClassName="basis-1/3" orientation="vertical" />
        </div>
      </div>
    );
  };

  const MultipleCarouselGrid = () => {
    return (
      <div className="border rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-5">Multiple Carousel</h2>
        <div className="w-full flex h-full items-center gap-5 p-12">
          <CarouselDemo carouselItemClassName="basis-1/3" />
        </div>
      </div>
    );
  };

  const ComboboxGrid = () => {
    return (
      <div className="border rounded-2xl p-4">
        <h2 className="text-2xl font-bold mb-5">Combobox</h2>
        <ComboboxDemo />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <AccordionGrid />
      <ButtonGrid />
      <AlertDialogGrid />
      <CarouselGrid />
      <VerticalCarouselGrid />
      <MultipleCarouselGrid />
      <BreadCrumbGrid />
      <ComboboxGrid />
    </div>
  );
};

export default DemoPage;
