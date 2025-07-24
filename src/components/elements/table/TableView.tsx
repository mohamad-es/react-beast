"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, type Table as TanstackTable, type ColumnDef } from "@tanstack/react-table";

type TableViewProps<TData> = {
  table: TanstackTable<TData>;
  columns: ColumnDef<TData, unknown>[];
};

export function TableView<TData>({ table, columns }: TableViewProps<TData>) {
  return (
    <Table className="h-full">
      <TableHeader className="sticky top-0 z-20 bg-background">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead className="text-start" key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              دیتا وجود ندارد
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
