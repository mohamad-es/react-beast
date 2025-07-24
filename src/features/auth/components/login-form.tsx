import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { email_schema, password_schema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailField, PasswordField } from "@/constants/form-fields";
import { useLogin } from "../hooks/useLogin";
import Spinner from "@/components/ui/spinner";

const FormData = [EmailField, PasswordField];

const FormSchema = z.object({
  email: email_schema,
  password: password_schema,
});

export function LoginForm({ className }: React.ComponentProps<"form">) {
  const { handleLoginSubmit, isPending } = useLogin();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "info@305.com", password: "QAZqaz!@#123" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLoginSubmit)} className={cn("flex flex-col gap-6", className)}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl alibaba-bold">ورود به حساب کاربری</h1>
          <p className="text-muted-foreground text-sm text-balance">برای ورود ایمیل و رمزتان را وارد کنید.</p>
        </div>

        {FormData.map((item) => (
          <FormField
            key={item.name}
            control={form.control}
            name={item.name as "email" | "password"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{item.label}</FormLabel>
                <FormControl>
                  <Input type={item.type} placeholder={item.placeholder} {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="me-auto">
          ورود
          {isPending && <Spinner />}
        </Button>
      </form>
    </Form>
  );
}
