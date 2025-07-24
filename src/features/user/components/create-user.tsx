import { Form } from "@/components/ui/form";
import { EmailField, NameField, PasswordField } from "@/constants/form-fields";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateUser } from "../hooks/useCreateUser";
import Spinner from "@/components/ui/spinner";
import { useState } from "react";
import UserFields from "./form/user-fields";
import { email_schema, name_schema, password_schema } from "@/lib/validation";
import { DialogMinify } from "@/components/ui/dialog/DialogMinify";

export const UserFormSchema = z.object({
  name: name_schema,
  email: email_schema,
  password: password_schema,
});

const FormData = [NameField, EmailField, PasswordField];

export default function CreateUser() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const { createUserHandler, isPending } = useCreateUser({ closeDialog: () => setOpen(false), reset: form.reset });

  return (
    <DialogMinify
      button={
        <Button>
          افزودن کاربر
          <UserPlus />
        </Button>
      }
      description="کاربر جدید را وارد کنید و بعد از اتمام بر روی دکمه ذخیره کلیک کنید"
      title="افزودن کاربر"
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form className="flex flex-col gap-4 mt-5" onSubmit={form.handleSubmit(createUserHandler)}>
          {FormData.map((item) => (
            <UserFields
              key={item.name}
              control={form.control}
              label={item.label}
              name={item.name as "email" | "password" | "name"}
            />
          ))}

          <Button className="ms-auto" type="submit" disabled={isPending}>
            ذخیره
            {isPending && <Spinner />}
          </Button>
        </form>
      </Form>
    </DialogMinify>
  );
}
