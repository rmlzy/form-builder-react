import React from "react";
import { Table } from "antd";
import _ from "lodash";
import { props2Text } from "../../helper/util";

const defaultColumns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

export default (option) => {
  option.columns = option.columns || [];
  if (option.columns.length === 0) {
    option.columns = defaultColumns;
  }
  const props = _.pick(option, ["bordered", "size", "dataSource", "columns", "pagination", "footer"]);
  const component = <Table {...props} />;
  const tablePropText = props2Text({
    ...props,
    dataSource: JSON.stringify(props.dataSource),
    columns: JSON.stringify(props.columns),
  });
  const text = `<Table ${tablePropText} />`;
  return { component, text };
};
