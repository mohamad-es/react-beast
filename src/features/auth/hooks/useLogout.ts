import { useAuth } from "@/context/AuthContext";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { ResponseDto } from "@/types/api-types";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigation = useNavigate();
  const { setAccessToken } = useAuth();
  const { isPending, mutate } = useTanstackMutation({
    url: "/auth/logout",
  });

  const handleLogoutSubmit = () => {
    mutate(
      {},
      {
        onSuccess: (response: ResponseDto<unknown>) => {
          if (response.response_code === 200) {
            setAccessToken(null);
            navigation("/login");
          }
        },
      }
    );
  };

  return { handleLogoutSubmit, isPending };
}
