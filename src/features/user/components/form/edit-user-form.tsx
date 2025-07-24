import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { NameField, EmailField, PasswordField } from "@/constants/form-fields";
import { email_schema, name_schema, password_schema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import UserFields from "./user-fields";
import { Form } from "@/components/ui/form";
import type { Dispatch, SetStateAction } from "react";
import { useEditUser } from "../../hooks/useEditUser";

const FormSchema = z.object({
  name: name_schema,
  email: email_schema,
  password: password_schema.optional(),
});

const FormData = [NameField, EmailField, PasswordField];

type props = {
  name: string;
  email: string;
  id: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function EditUserForm({ email, name, setOpen, id }: props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name, email },
  });

  const { editUserHandler, isPending } = useEditUser({ closeDialog: () => setOpen(false), id, reset: form.reset });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 mt-5" onSubmit={form.handleSubmit(editUserHandler)}>
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
  );
}
