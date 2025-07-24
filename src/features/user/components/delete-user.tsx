import { AlertDialogMinify } from "@/components/ui/alert-dialog/AlertDialogMinify";
import { Button } from "@/components/ui/button";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Spinner from "@/components/ui/spinner";
import { TrashIcon } from "lucide-react";

type props = {
  id: number;
  name: string;
};

export default function DeleteUser({ id, name }: props) {
  const { deleteUserHandler, isPending } = useDeleteUser({ id });

  const form = useForm();

  return (
    <AlertDialogMinify
      button={
        <Button
          className="w-full text-destructive flex justify-between hover:text-destructive px-2 h-8"
          variant={"ghost"}
        >
          <TrashIcon color="black" />
          حذف
        </Button>
      }
      description={`از حذف کردن کاربر با نام ${name} اطمینان دارید ؟`}
      title={`حذف کاربر با نام : ${name}`}
    >
      <Form {...form}>
        <form className="flex justify-end gap-2" onSubmit={form.handleSubmit(deleteUserHandler)}>
          <Button type="button" variant="outline">
            لغو
          </Button>
          <Button variant={"destructive"} type="submit" disabled={isPending}>
            حذف
            {isPending && <Spinner />}
          </Button>
        </form>
      </Form>
    </AlertDialogMinify>
  );
}
