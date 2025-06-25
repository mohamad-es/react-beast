import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type props = {
  defaultValue?: string;
  list: {
    title: string;
    content: string;
    value: string;
  }[];
};

export function AccordionDemo({ list, defaultValue }: props) {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={defaultValue || undefined}>
      {list.map((item) => (
        <AccordionItem key={item.title} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
