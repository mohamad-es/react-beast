import type { PaginatedResponse } from "@/types/response";
import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type props<T> = {
  data: PaginatedResponse<T[]>;
  columns: ColumnDef<T>[];
};

export default function TanstackTable<T>({ data, columns }: props<T>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  return useReactTable({
    data: data.data,
    columns,
    pageCount: data ? Math.ceil(data.total / pagination.pageSize) : 0,
    state: {
      pagination,
      sorting,
      globalFilter,
    },
    manualPagination: true,
    manualSorting: true,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  
}
