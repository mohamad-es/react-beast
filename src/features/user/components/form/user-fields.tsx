import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Control, FieldValues, Path } from "react-hook-form";

type props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export default function UserFields<T extends FieldValues>({ label, name, control }: props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-8">
          <FormLabel className="col-span-2">{label}</FormLabel>
          <FormControl className="col-span-6">
            <Input {...field} />
          </FormControl>
          <div className="col-span-8 grid grid-cols-8">
            <div className="col-span-2" />
            <FormMessage className="text-xs col-span-6" />
          </div>
        </FormItem>
      )}
    />
  );
}
