import React from "react";
import { Table } from "antd";
import _ from "lodash";

export const TableMeta = {
  component: "Table",
  componentIcon: "P",
  componentName: "表格",
};

export const _Table = (option) => {
  option.dataSource = [];
  const props = _.pick(option, ["bordered", "size", "dataSource", "columns", "dataSource", "footer"]);
  const component = <Table {...props} />;
  const text = "";
  return { component, text };
};
