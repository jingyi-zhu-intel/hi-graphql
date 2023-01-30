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
          name: "Checkbox",
          status: "Need to customize color with adding css",
        },
        {
          name: "Combobox",
          status: "When click on combobox box, will redirect to error page",
        },
        {
          name: "Dropdown",
          status: "When click on dropdown box, will redirect to error page",
        },
        {
          name: "Grid",
          status: "NONE",
        },
        {
          name: "Header",
          status:
            "Nav link css incorrect/more than 2 items, and no gap between items, pure text not supported",
        },
        {
          name: "Heading",
          status: "OK",
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
          name: "List",
          status: "Can not customize color",
        },
        {
          name: "ProgressBar",
          status: "Skin not work",
        },
        {
          name: "Radio & Radio Group",
          status: "OK, but difficult to customize colors styles etc.",
        },
        {
          name: "Tab",
          status: "Icon of tab not work",
        },
        {
          name: "Table",
          status: "Simple table OK, no sort/search etc.",
        },
        {
          name: "Tag",
          status: "OK",
        },
        {
          name: "Text Field",
          status: "OK for single line, no multiple link",
        },
        {
          name: "Toggle switch",
          status: "OK",
        },
        {
          name: "Tooltip",
          status: "OK",
        },
      ]}
      size="3xl"
      variant="outline"
    />
  );
};
