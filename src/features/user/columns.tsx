import type { ColumnDef } from "@tanstack/react-table";
import { EllipsisVerticalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/api-types";
import EditUser from "./components/edit-user";
import DeleteUser from "./components/delete-user";
import UserActiveSwitch from "./components/form/activate-user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "آیدی",
    cell: ({ row }) => row.original.id,
  },
  {
    accessorKey: "name",
    header: "نام کاربری",
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: "email",
    header: "ایمیل",
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: "is_active",
    header: "وضعیت",
    cell: ({ row }) => {
      return <UserActiveSwitch isActive={row.original.is_active} id={row.original.id} />;
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-36 text-sm text-end">
          <EditUser id={row.original.id} slug={row.original.slug} />
          <DropdownMenuSeparator />
          <DeleteUser name={row.original.name!} id={row.original.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
