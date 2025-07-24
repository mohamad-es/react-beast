"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, type Dispatch, type SetStateAction } from "react";
import { PlusCircle } from "lucide-react";

const labelMap: Record<string, string> = {
  name: "نام کاربری",
  email: "ایمیل",
};

type props = {
  setGlobalFilterTerm: Dispatch<SetStateAction<string[] | undefined>>;
};

export function FilterCheckboxDropdown({ setGlobalFilterTerm }: props) {
  const [filters, setFilters] = useState({
    name: false,
    email: false,
  });

  const handleChange = (key: keyof typeof filters) => {
    const updated = { ...filters, [key]: !filters[key] };
    setFilters(updated);

    // Extract selected filter keys and update parent
    const activeFilters = Object.entries(updated)
      .filter(([_, v]) => v)
      .map(([k]) => k);

    setGlobalFilterTerm(activeFilters); // <-- Notify parent
  };

  // Get checked filters as array of keys
  const selectedFilters = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed flex items-center gap-2 flex-wrap">
          بر اساس
          <PlusCircle size={18} />
          {selectedFilters.map((key) => (
            <Badge className="rounded-sm" variant={"secondary"} key={key}>
              {labelMap[key]}
            </Badge>
          ))}
        </Button>
      </PopoverTrigger>

      <PopoverContent side="bottom" align="start" className="w-44 px-3" dir="rtl">
        <div className="flex items-center gap-2 mb-4">
          <Checkbox
            className="shadow-none border-gray-400 rounded-[5px]"
            id="name"
            checked={filters.name}
            onCheckedChange={() => handleChange("name")}
          />
          <Label htmlFor="name">نام کاربری</Label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            className="shadow-none border-gray-400 rounded-[5px]"
            id="email"
            checked={filters.email}
            onCheckedChange={() => handleChange("email")}
          />
          <Label htmlFor="email">ایمیل</Label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
