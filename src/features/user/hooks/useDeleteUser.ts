import { useInvalidateQueries } from "@/lib/tanstack-query/InvalidateQueries";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { ResponseDto } from "@/types/api-types";

type props = {
  id: number;
};

export function useDeleteUser({ id }: props) {
  const { isPending, mutate } = useTanstackMutation({ url: "/user/delete" });

  const invalidateQuery = useInvalidateQueries();

  const deleteUserHandler = () => {
    mutate(
      { id },
      {
        onSuccess: (data: ResponseDto<unknown>) => {
          if (data.response_code === 200) {
            invalidateQuery(["user-list"]);
          }
        },
      }
    );
  };

  return { deleteUserHandler, isPending };
}
