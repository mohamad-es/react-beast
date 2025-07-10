import { axiosInstance } from "./axios-instance";
import { AxiosError, AxiosResponse } from "axios";
import { TBaseResponse } from "@/types/response";

type props = {
  url: string;
  params?: unknown;
};

export default async function AxiosGet({ url, params }: props) {
  try {
    const response: AxiosResponse<TBaseResponse<unknown>> = await axiosInstance({
      method: "POST",
      url,
      params,
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<TBaseResponse<unknown>>;
    throw error;
  }
}
