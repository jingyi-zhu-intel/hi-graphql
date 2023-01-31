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
        { Header: "Related issue", accessor: "issue", textAlign: "center" },
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
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/759",
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
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/1210;https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/1082",
        },
        {
          name: "Grid",
          status: "NONE",
        },
        {
          name: "Header",
          status:
            "Nav link css incorrect/more than 2 items, and no gap between items, pure text not supported",
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/1418",
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
          name: "Shimmer",
          status: "OK",
        },
        {
          name: "Tab",
          status: "Icon of tab not work",
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/988;https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/886",
        },
        {
          name: "Table",
          status: "Simple table OK, no sort/search etc.",
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/890;https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/832",
        },
        {
          name: "Tag",
          status: "simple tag ok",
          issue:
            "https://github.com/intel-innersource/libraries.ui.intel-design-system.spark-design/issues/833",
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
