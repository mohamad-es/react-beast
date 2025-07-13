import { DataTable } from "@/components/shared/table/StaticTable";

const DashboardPage = () => {
  return (
    <div className="p-5">
      <DataTable
        data={[
          {
            id: 1,
            limit: "10",
            reviewer: "10",
            status: "کاربر عادی",
            target: "40",
            header: "محمود",
            type: "Good",
          },
          {
            id: 2,
            limit: "10",
            reviewer: "10",
            status: "Done",
            target: "40",
            header: "Name",
            type: "Good",
          },
          {
            id: 3,
            limit: "10",
            reviewer: "10",
            status: "Loading",
            target: "40",
            header: "محمود",
            type: "Good",
          },
          {
            id: 3,
            limit: "10",
            reviewer: "10",
            status: "Loading",
            target: "40",
            header: "محمود",
            type: "Good",
          },
          {
            id: 3,
            limit: "10",
            reviewer: "10",
            status: "Loading",
            target: "40",
            header: "محمود",
            type: "Good",
          },
        ]}
      />
    </div>
  );
};

export default DashboardPage;
