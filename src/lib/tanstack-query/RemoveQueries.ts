import { useQueryClient } from "@tanstack/react-query";

export function useRemoveQueries() {
  const queryClient = useQueryClient();

  const removeQueries = (searchStrings: string[]) => {
    queryClient.removeQueries({
      predicate: (query) => {
        return searchStrings.some((searchString) =>
          query.queryKey.some((key) => typeof key === "string" && key.includes(searchString))
        );
      },
    });
  };

  return removeQueries;
}
