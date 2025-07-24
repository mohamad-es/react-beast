import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type { PaginatedResponse } from "@/types/global";
import type { Dispatch, SetStateAction } from "react";

type Props<T> = {
  data: PaginatedResponse<T> | null | undefined;
  columns: ColumnDef<T>[];
  pagination: { pageIndex: number; pageSize: number };
  setPagination: React.Dispatch<React.SetStateAction<{ pageIndex: number; pageSize: number }>>;
  setGlobalFilter: (value: string) => void;
  sorting: SortingState;
  setSorting: Dispatch<SetStateAction<SortingState>>;
};

export default function useTanstackTable<T>({
  data,
  setSorting,
  sorting,
  columns,
  setGlobalFilter,
  pagination,
  setPagination,
}: Props<T>) {
  return useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: data?.totalPages,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: (updaterOrValue) => {
      if (typeof updaterOrValue === "function") {
        setPagination((prev) => updaterOrValue(prev));
      } else {
        setPagination(updaterOrValue);
      }
    },
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
  });
}
