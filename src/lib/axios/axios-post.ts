import type { TBaseResponse } from "@/types/response";
import { axiosInstance } from "./axios-instance";
import { AxiosError, type AxiosResponse,} from "axios";

type props = {
  url: string;
  data: Record<string, unknown>;
};

export default async function AxiosPost({ data, url }: props) {
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
}
