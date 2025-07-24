import Spinner from "../ui/spinner";
import type { ReactNode } from "react";

type props<T> = {
  isPending: boolean;
  error: Error | null;
  data: T;
  children: ReactNode;
};

export function RenderState<T>({ children, error, isPending, data }: props<T>) {
  if (isPending)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-1/2">
        <Spinner size="h-8! w-8!" />
      </div>
    );
  if (error) return <div className="absolute left-1/2 top-1/2 -translate-1/2">{error.message}</div>;
  if (!data) return <div className="absolute left-1/2 top-1/2 -translate-1/2">No content found</div>;

  return children;
}
