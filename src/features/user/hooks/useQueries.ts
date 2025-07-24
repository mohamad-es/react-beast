import { useTanstackQuery } from "@/lib/tanstack-query/tanstack-query";
import type { PaginatedParams, PaginatedResponse } from "@/types/global";
import type { User } from "@/types/api-types";

export const FetchUserList = (params?: PaginatedParams, enabled?: boolean) =>
  useTanstackQuery<PaginatedResponse<User>>({
    queryKey: ["user-list", params],
    url: "/user/list",
    params,
    enabled,
  });

export const FetchUserBySlug = (slug: string) =>
  useTanstackQuery<User>({
    queryKey: ["user-single", slug],
    url: "/user/get",
    params: {
      slug,
    },
  });
