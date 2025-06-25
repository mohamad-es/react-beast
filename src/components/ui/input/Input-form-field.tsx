"use client";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control, FieldValues } from "react-hook-form";

type props = {
  control: Control<FieldValues, FieldValues> | undefined;
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  type?: "string" | "number";
};

export function InputFormField({ control, name, label, description, placeholder, type }: props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {type === "number" ? (
              <Input
                {...field}
                placeholder={placeholder}
                type="number"
                onChange={(e) => field.onChange(+e.target.value)} // convert to number
              />
            ) : (
              <Input {...field} placeholder={placeholder} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
