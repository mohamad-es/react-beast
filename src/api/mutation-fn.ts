import { useMutation } from "@tanstack/react-query";
import { AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import type { TBaseResponse } from "@/types/response";

type Props = {
  url: string;
};

export function MutationFn({ url }: Props) {
  const mutation = useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      try {
        const response: AxiosResponse<TBaseResponse<unknown>> = await axiosInstance({
          method: "POST",
          url,
          data,
        });
        return response.data;
      } catch (err) {
        const error = err as AxiosError<TBaseResponse<unknown>>;
        throw error;
      }
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
