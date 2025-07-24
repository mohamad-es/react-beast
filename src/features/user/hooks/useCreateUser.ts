import { useInvalidateQueries } from "@/lib/tanstack-query/InvalidateQueries";
import { useTanstackMutation } from "@/lib/tanstack-query/tanstack-mutation";
import type { FieldValues, UseFormReset } from "react-hook-form";

type props = {
  closeDialog: () => void;
  reset: UseFormReset<{
    name: string;
    email: string;
    password: string;
  }>;
};

export function useCreateUser({ closeDialog, reset }: props) {
  const invalidateQuery = useInvalidateQueries();
  const { isPending, mutate } = useTanstackMutation({ url: "/user/create" });

  const createUserHandler = (data:FieldValues) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data.response_code === 201) {
          invalidateQuery(["user"]);
          reset();
          closeDialog();
        }
      },
    });
  };

  return { createUserHandler, isPending };
}
