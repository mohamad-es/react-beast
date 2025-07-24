import { useInvalidateQueries } from "@/lib/tanstack-query/InvalidateQueries";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { FieldValues, UseFormReset } from "react-hook-form";

type props = {
  id: number;
  closeDialog: () => void;
  reset: UseFormReset<{
    name: string;
    email: string;
  }>;
};

export function useEditUser({ closeDialog, reset, id }: props) {
  const invalidateQuery = useInvalidateQueries();
  const { isPending, mutate } = useTanstackMutation({ url: "/user/edit" });

  const editUserHandler = (data: FieldValues) => {
    mutate(
      { id, ...data },
      {
        onSuccess: (data) => {
          if (data.response_code === 200) {
            invalidateQuery(["user"]);
            reset();
            closeDialog();
          }
        },
      }
    );
  };

  return { isPending, editUserHandler };
}
