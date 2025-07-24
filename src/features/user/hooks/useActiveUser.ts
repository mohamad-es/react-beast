import { useInvalidateQueries } from "@/lib/tanstack-query/InvalidateQueries";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { ResponseDto } from "@/types/api-types";

type props = {
  id: number;
};

export function useActiveUser({ id }: props) {
  const { isPending, mutate } = useTanstackMutation({ url: "/user/activation" });

  const invalidateQuery = useInvalidateQueries();

  const activeUserHandler = () => {
    mutate(
      { user_id: id },
      {
        onSuccess: (data: ResponseDto<unknown>) => {
          if (data.response_code === 204) {
            invalidateQuery(["user-list"]);
          }
        },
      }
    );
  };

  return { activeUserHandler, isPending };
}
