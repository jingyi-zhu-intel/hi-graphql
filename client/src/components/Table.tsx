import { Table } from "@spark-design/react";

export const HiTable = () => {
  return (
    <Table
      columns={[
        {
          Header: "Component name",
          accessor: "name",
          textAlign: "center",
        },
        {
          Header: "Status",
          accessor: "status",
          textAlign: "center",
        },
      ]}
      data={[
        {
          name: "Header",
          status: "Nav link css incorrect",
        },
        {
          name: "Table",
          status: "Done",
        },
      ]}
      size="3xl"
      variant="outline"
    />
  );
};
