import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type props = {
  button: string;
  title: string;
  description: string;
  cancel: string;
  submit: string;
};

export function AlertDialogDemo({ title, button, cancel, description, submit }: props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{button}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent dir="ltr">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-end">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-end">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction>{submit}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
