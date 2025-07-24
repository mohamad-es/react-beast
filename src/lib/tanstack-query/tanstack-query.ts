import { useQuery } from "@tanstack/react-query";
import AxiosGet from "../axios/axios-get";
import type { ResponseDto } from "@/types/api-types";

type props = {
  url: string;
  queryKey: unknown[];
  params?: unknown;
  enabled?: boolean;
};

export function useTanstackQuery<T>({ url, params, queryKey, enabled }: props) {
  const query = useQuery<ResponseDto<T>>({
    queryKey,
    queryFn: async () => await AxiosGet({ url, params }),
    enabled,
  });

  return {
    data: query.data,
    isPending: query.isPending,
    error: query.error,
  };
}
