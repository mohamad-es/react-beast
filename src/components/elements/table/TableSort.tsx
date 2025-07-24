"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SortingState } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  setSorting: Dispatch<SetStateAction<SortingState>>;
};

export default function TableSort({ setSorting }: Props) {
  const handleChange = (value: string) => {
    switch (value) {
      case "1":
        setSorting([{ id: "created_at", desc: false }]);
        break;
      case "2":
        setSorting([{ id: "created_at", desc: true }]);
        break;
      case "3":
        setSorting([{ id: "updated_at", desc: false }]);
        break;
      case "4":
        setSorting([{ id: "updated_at", desc: true }]);
        break;
      default:
        setSorting([]);
    }
  };

  return (
    <Select dir="rtl" onValueChange={handleChange}>
      <SelectTrigger className="shadow-none">
        <SelectValue placeholder="مرتب سازی" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>مرتب سازی</SelectLabel>
          <SelectItem value="1">ساخت (صعودی)</SelectItem>
          <SelectItem value="2">ساخت (نزولی)</SelectItem>
          <SelectItem value="3">به‌روزرسانی (صعودی)</SelectItem>
          <SelectItem value="4">به‌روزرسانی (نزولی)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
