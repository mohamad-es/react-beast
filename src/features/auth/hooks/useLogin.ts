import { useAuth } from "@/context/AuthContext";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { ResponseDto } from "@/types/api-types";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigation = useNavigate();
  const { setAccessToken } = useAuth();
  const { isPending, mutate } = useTanstackMutation({
    url: "/auth/login",
  });

  const handleLoginSubmit = (values: FieldValues) => {
    mutate(values, {
      onSuccess: (response: ResponseDto<{ access_token: string }>) => {
        if (response.response_code === 200) {
          setAccessToken(response.data?.access_token as string);
          navigation("/");
        }
      },
    });
  };

  return { handleLoginSubmit, isPending };
}
