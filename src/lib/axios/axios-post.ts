import { axiosInstance } from "./axios-instance";
import { AxiosError } from "axios";

type props = {
  url: string;
  data: unknown;
};

export default async function AxiosPost({ data, url }: props) {
  try {
    const response = await axiosInstance({
      method: "POST",
      url,
      data,
    });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
