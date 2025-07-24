import { useQueryClient } from "@tanstack/react-query";

export function useInvalidateQueries() {
  const queryClient = useQueryClient();

  return (searchStrings: string[]) => {
    queryClient.invalidateQueries({
      predicate: (query) => {
        return (
          Array.isArray(query.queryKey) &&
          searchStrings.some((searchString) =>
            query.queryKey.some((key) => typeof key === "string" && key.includes(searchString))
          )
        );
      },
    });
  };
}
