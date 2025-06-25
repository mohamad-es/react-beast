"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { UseFormReturn } from "react-hook-form";

type props<T> = {
  form: UseFormReturn;
  name: string;
  data: T[];
  placeholder: string;
  labelKey: keyof T;
  valueKey: keyof T;
  label?: string;
  description?: string;
};

export function ComboboxFormField<T>({
  form,
  data,
  name,
  description,
  label,
  placeholder,
  labelKey,
  valueKey,
}: props<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
                >
                  {field[valueKey] ? data.find((item) => item[valueKey] === field[valueKey])[labelKey] : placeholder}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search framework..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {data.map((item) => (
                      <CommandItem
                        value={item[labelKey]}
                        key={item[valueKey]}
                        onSelect={() => {
                          form.setValue(name, item[valueKey]);
                        }}
                      >
                        {item[labelKey]}
                        <Check
                          className={cn("ml-auto", item[valueKey] === field[valueKey] ? "opacity-100" : "opacity-0")}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
