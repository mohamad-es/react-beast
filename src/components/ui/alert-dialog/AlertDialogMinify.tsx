import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ReactNode } from "react";
import { Button } from "../button";

type props = {
  button?: ReactNode | string;
  title: string;
  description: string;
  children: ReactNode;
};

export function AlertDialogMinify({ title, button, description, children }: props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{typeof button === "string" ? <Button>{button}</Button> : button}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-start">
          <AlertDialogTitle className="font-normal alibaba-bold">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-start">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}
