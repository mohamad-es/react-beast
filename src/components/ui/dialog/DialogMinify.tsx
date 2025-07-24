import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode, ReactElement } from "react";
import { Button } from "../button";

type props = {
  children: ReactNode;
  title: string;
  description: string;
  button: ReactElement | string;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function DialogMinify({ children, button, description, title, open, setOpen }: props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{typeof button === "string" ? <Button>{button}</Button> : button}</DialogTrigger>
      <DialogContent className="overflow-auto max-h-[80vh] [&>button]:right-11/12">
        <DialogHeader className="items-start">
          <DialogTitle className="font-medium alibaba-bold mb-2">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
