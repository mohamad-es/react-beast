import { useQuery } from "@tanstack/react-query";
import AxiosGet from "../axios/axios-get";

type props = {
  url: string;
  queryKey: unknown[];
  params?: unknown;
};

export function ReactQueryGet({ url, params, queryKey }: props) {
  const query = useQuery({
    queryKey,
    queryFn: async () => await AxiosGet({ url, params }),
  });

  return {
    data: query.data,
    isPending: query.isPending,
    error: query.error,
  };
}
