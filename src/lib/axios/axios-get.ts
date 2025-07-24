import { axiosInstance } from "./axios-instance";
import { AxiosError } from "axios";

type props = {
  url: string;
  params?: unknown;
};

export default async function AxiosGet({ url, params }: props) {
  try {
    const response = await axiosInstance({
      method: "GET",
      url,
      params,
    });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
