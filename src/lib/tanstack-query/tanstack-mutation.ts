import { useMutation } from "@tanstack/react-query";
import AxiosPost from "../axios/axios-post";
import { toast } from "sonner";
import type { ResponseDto } from "@/types/api-types";
import type { FieldValues } from "react-hook-form";

type Props = {
  url: string;
};

export function useTanstackMutation<TResponse, TRequest = FieldValues>({ url }: Props) {
  const mutation = useMutation<ResponseDto<TResponse>, Error, TRequest>({
    mutationFn: async (data: TRequest) => await AxiosPost({ url, data }),
    onError: (error) => toast.error(error.message),
    onSuccess: (data) => toast.success(data.message),
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
