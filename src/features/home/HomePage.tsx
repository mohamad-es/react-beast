import { QueryFn } from "@/api/query-fn";

const HomePage = () => {
  const { data, error, isPending } = QueryFn({
    queryKey: ["users"],
    url: "",
  });

  if (isPending) return <div>Loading ...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No data found.</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default HomePage;
