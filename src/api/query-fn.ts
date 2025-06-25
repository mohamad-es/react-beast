import { AxiosError, type AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import type { TBaseResponse } from "@/types/response";

type props = {
  url: string;
  params?: unknown;
};

export async function QueryFn({ url, params }: props) {
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
}

