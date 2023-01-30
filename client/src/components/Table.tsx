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
          name: "Breadcrumb",
          status: "OK",
        },
        {
          name: "Button",
          status: "OK, color need enhancement",
        },
        {
          name: "Button Group",
          status: "OK",
        },
        {
          name: "Card",
          status:
            "Card helper content missing, image/title/content/actions etc.",
        },
        {
          name: "Grid",
          status: "NONE",
        },
        {
          name: "Header",
          status:
            "Nav link css incorrect/more than 2 items, and no gap between items",
        },
        {
          name: "Hyperlink",
          status:
            "Hyperlink used as a children of header, as and skin props not work, also can not work when used <Hyperlink /> this way",
        },
        {
          name: "Icon",
          status: "OK",
        },
        {
          name: "Table",
          status: "Simple table OK, no sort/search etc.",
        },
      ]}
      size="3xl"
      variant="outline"
    />
  );
};
