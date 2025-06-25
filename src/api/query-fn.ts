import { AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import type { TBaseResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

type props = {
  url: string;
  queryKey: unknown[];
  params?: unknown;
};

export function QueryFn({ url, params, queryKey }: props) {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response: AxiosResponse<TBaseResponse<unknown>> = await axiosInstance({
          method: "GET",
          url,
          params,
        });
        return response.data;
      } catch (err) {
        const error = err as AxiosError<TBaseResponse<unknown>>;
        throw error;
      }
    },
  });

  return {
    data: query.data,
    isPending: query.isPending,
    error: query.error,
  };
}
