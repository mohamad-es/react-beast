import { useMutation } from "@tanstack/react-query";
import AxiosPost from "../axios/axios-post";

type Props = {
  url: string;
};

export function ReactQueryPost({ url }: Props) {
  const mutation = useMutation({
    mutationFn: async (data: Record<string, unknown>) => await AxiosPost({ url, data }),
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
