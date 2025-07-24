import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type Props<T> = {
  table: Table<T>;
};

export default function TablePagination<T>({ table }: Props<T>) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-2 text-sm gap-4 border-t mt-auto">
      <div className="flex items-center gap-2 flex-row-reverse">
        <span className="ms-4">
          صفحه {table.getState().pagination.pageIndex + 1} از {table.getPageCount()}
        </span>
        <Button
          variant="outline"
          size="icon"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          <ChevronsRight />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <ChevronRight />
        </Button>
        <Button variant="outline" size="icon" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <ChevronsLeft />
        </Button>
      </div>

      {/* Page size selector */}
      <div className="flex items-center gap-2 ">
        <span>تعداد در صفحه</span>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50].map((size) => (
              <SelectItem key={size} value={String(size)}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
