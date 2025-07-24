import CreateUser from "./components/create-user";
import { FetchUserList } from "./hooks/useQueries";
import { RenderState } from "@/components/wrappers/RenderState";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import TableSort from "@/components/elements/table/TableSort";
import { TableView } from "@/components/elements/table/TableView";
import { columns } from "./columns";
import useTanstackTable from "@/hooks/useTanstackTable";
import TablePagination from "@/components/elements/table/TablePagination";
import type { SortingState } from "@tanstack/react-table";
import { FilterCheckboxDropdown } from "@/components/elements/table/FilterCheckboxDropdown";
import { useDebounce } from "@/hooks/useDebounce";

export default function UserListPage() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [globalFilter, setGlobalFilter] = useState("");
  const [globalFilterTerm, setGlobalFilterTerm] = useState([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const debouncedSearch = useDebounce(globalFilter, 500);

  const searchFilters = globalFilterTerm.length > 0 ? globalFilterTerm : ["email", "name"];

  const searchQuery =
    debouncedSearch.length > 0 ? searchFilters.map((key) => `${key}=${debouncedSearch}`).join("&") : null;

  const shouldFetch = !!searchQuery || true;

  const { data, isPending, error } = FetchUserList(
    {
      Page: pagination.pageIndex + 1,
      PageSize: pagination.pageSize,
      Search: searchQuery ?? "",
      SortBy: sorting,
    },
    shouldFetch
  );

  const table = useTanstackTable({
    columns,
    data: data?.data,
    pagination,
    setGlobalFilter,
    setPagination,
    setSorting,
    sorting,
  });

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: 0,
    }));
  }, [debouncedSearch, globalFilterTerm]);

  return (
    <div className="p-5 pt-0 h-[calc(100vh-56px)] flex flex-col">
      <div className="flex flex-wrap justify-between mb-5">
        <div>
          <h1 className="alibaba-bold text-2xl">لیست کاربران</h1>
          <p className="text-sm mt-2">کاربران خودرا مدیریت کنید.</p>
        </div>
        <CreateUser />
      </div>

      <div className="flex items-center justify-between mb-3 gap-3">
        <div className="flex items-center gap-3">
          <Input
            className="max-w-xs"
            placeholder="جستجو ..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />

          <FilterCheckboxDropdown setGlobalFilterTerm={setGlobalFilterTerm} />
        </div>

        <TableSort setSorting={setSorting} />
      </div>

      <div className="w-full rounded-lg border flex-1 flex-col flex relative overflow-auto">
        <RenderState data={data?.data} isPending={isPending} error={error}>
          <TableView columns={columns} table={table} />
        </RenderState>

        <TablePagination table={table} />
      </div>
    </div>
  );
}
